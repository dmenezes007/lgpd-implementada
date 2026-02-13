import {
  clearSessionCookie,
  createSessionToken,
  readJsonBody,
  setSessionCookie,
  validatePassword,
} from './_shared.js';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ error: 'Método não permitido' });
    return;
  }

  try {
    const body = await readJsonBody(request);
    const password = typeof body?.password === 'string' ? body.password : '';

    if (!password) {
      clearSessionCookie(response);
      response.status(400).json({ error: 'Senha obrigatória' });
      return;
    }

    const isValid = await validatePassword(password);

    if (!isValid) {
      clearSessionCookie(response);
      response.status(401).json({ error: 'Senha incorreta' });
      return;
    }

    const token = createSessionToken();
    setSessionCookie(response, token);
    response.status(200).json({ success: true });
  } catch {
    clearSessionCookie(response);
    response.status(500).json({ error: 'Erro interno de autenticação' });
  }
}
