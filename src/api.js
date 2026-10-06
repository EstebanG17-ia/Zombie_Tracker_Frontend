const TOKEN_KEY = "token";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

async function request(path, { method = "GET", body } = {}) {
  const headers = { "Content-Type": "application/json" };
  const token = getToken();
  if (token) headers.Authorization = `Token ${token}`;

  let res;
  try {
    res = await fetch(`/api${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    throw new Error("No se pudo conectar con el servidor.");
  }

  const data = res.status === 204 ? null : await res.json().catch(() => null);

  if (!res.ok) {
    const error = new Error(data?.message || data?.detail || "Ocurrió un error.");
    error.status = res.status;
    throw error;
  }
  return data;
}

export const registerUser = (payload) =>
  request("/auth/register/", { method: "POST", body: payload });

export const loginUser = (identifier, password) =>
  request("/auth/login/", { method: "POST", body: { identifier, password } });

export const logoutUser = () => request("/auth/logout/", { method: "POST" });

export const getMe = () => request("/auth/me/");
