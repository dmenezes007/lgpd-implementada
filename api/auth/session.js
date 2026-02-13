import { getSessionTokenFromRequest, verifySessionToken } from './_shared.js';

export default function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    response.status(405).json({ error: 'Método não permitido' });
    return;
  }

  const token = getSessionTokenFromRequest(request);
  const authenticated = verifySessionToken(token);

  if (!authenticated) {
    response.status(401).json({ authenticated: false });
    return;
  }

  response.status(200).json({ authenticated: true });
}
