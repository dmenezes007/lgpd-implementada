import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';

const SESSION_COOKIE_NAME = 'lgpd_session';
const SESSION_TTL_SECONDS = 60 * 60 * 8;

const getRequiredEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

const toBase64Url = (value) => Buffer.from(value).toString('base64url');
const fromBase64Url = (value) => Buffer.from(value, 'base64url').toString('utf8');

const sign = (payload, secret) => {
  return crypto.createHmac('sha256', secret).update(payload).digest('base64url');
};

export const parseCookies = (cookieHeader) => {
  if (!cookieHeader) {
    return {};
  }

  return cookieHeader
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((accumulator, current) => {
      const separatorIndex = current.indexOf('=');
      if (separatorIndex < 0) {
        return accumulator;
      }

      const name = current.slice(0, separatorIndex).trim();
      const value = current.slice(separatorIndex + 1).trim();
      accumulator[name] = decodeURIComponent(value);
      return accumulator;
    }, {});
};

const safeEqual = (left, right) => {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
};

export const createSessionToken = () => {
  const secret = getRequiredEnv('AUTH_SESSION_SECRET');
  const expiresAt = Date.now() + SESSION_TTL_SECONDS * 1000;

  const payload = toBase64Url(
    JSON.stringify({
      sub: 'lgpd-user',
      exp: expiresAt,
    }),
  );

  const signature = sign(payload, secret);
  return `${payload}.${signature}`;
};

export const verifySessionToken = (token) => {
  try {
    if (!token) {
      return false;
    }

    const secret = getRequiredEnv('AUTH_SESSION_SECRET');
    const [payload, signature] = token.split('.');

    if (!payload || !signature) {
      return false;
    }

    const expectedSignature = sign(payload, secret);
    if (!safeEqual(signature, expectedSignature)) {
      return false;
    }

    const decodedPayload = JSON.parse(fromBase64Url(payload));
    if (!decodedPayload?.exp || Date.now() > Number(decodedPayload.exp)) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

const buildCookie = (value, maxAgeSeconds) => {
  const secureFlag = process.env.NODE_ENV === 'development' ? '' : '; Secure';
  return `${SESSION_COOKIE_NAME}=${value}; Path=/; HttpOnly; SameSite=Strict${secureFlag}; Max-Age=${maxAgeSeconds}`;
};

export const setSessionCookie = (response, token) => {
  response.setHeader('Set-Cookie', buildCookie(token, SESSION_TTL_SECONDS));
};

export const clearSessionCookie = (response) => {
  response.setHeader('Set-Cookie', buildCookie('', 0));
};

export const getSessionTokenFromRequest = (request) => {
  const cookies = parseCookies(request.headers.cookie);
  return cookies[SESSION_COOKIE_NAME] ?? null;
};

export const validatePassword = async (password) => {
  const hash = getRequiredEnv('AUTH_PASSWORD_HASH');
  return bcrypt.compare(password, hash);
};

export const readJsonBody = async (request) => {
  if (request.body && typeof request.body === 'object') {
    return request.body;
  }

  return new Promise((resolve, reject) => {
    let data = '';

    request.on('data', (chunk) => {
      data += chunk;
    });

    request.on('end', () => {
      if (!data) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(data));
      } catch {
        reject(new Error('Invalid JSON body'));
      }
    });

    request.on('error', reject);
  });
};
