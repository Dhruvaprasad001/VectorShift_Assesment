// api.js - generic API client for backend calls
const DEFAULT_BASE_URL = process.env.REACT_APP_API_BASE_URL || '/api';

async function request(path, options = {}) {
  const url = `${DEFAULT_BASE_URL}${path}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    credentials: 'include',
    ...options,
  });
  const contentType = response.headers.get('content-type') || '';
  const parseJson = contentType.includes('application/json');
  if (!response.ok) {
    const errorPayload = parseJson ? await response.json().catch(() => ({})) : await response.text().catch(() => '');
    throw new Error(errorPayload?.message || `Request failed: ${response.status}`);
  }
  return parseJson ? response.json() : response.text();
}

export const api = {
  get: (path) => request(path, { method: 'GET' }),
  post: (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) }),
  put: (path, body) => request(path, { method: 'PUT', body: JSON.stringify(body) }),
  del: (path) => request(path, { method: 'DELETE' }),
};


