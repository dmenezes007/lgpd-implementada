import { clearSessionCookie } from './_shared.js';

export default function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    response.status(405).json({ error: 'Método não permitido' });
    return;
  }

  clearSessionCookie(response);
  response.status(200).json({ success: true });
}
