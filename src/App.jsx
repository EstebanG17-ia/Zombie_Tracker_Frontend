import { useEffect, useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import {
  clearToken,
  getMe,
  getToken,
  loginUser,
  logoutUser,
  registerUser,
  setToken,
} from "./api";

function App() {
  const [page, setPage] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);
  const [checkingSession, setCheckingSession] = useState(!!getToken());

  // Si hay un token guardado, recupera la sesión al recargar la página
  useEffect(() => {
    if (!getToken()) return;

    getMe()
      .then((user) => {
        setCurrentUser(user);
        setPage("dashboard");
      })
      .catch(() => clearToken())
      .finally(() => setCheckingSession(false));
  }, []);

  const handleRegister = async (newUser) => {
    try {
      await registerUser(newUser);
      setPage("login");
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const handleLogin = async (identifier, password) => {
    try {
      const { token, user } = await loginUser(identifier, password);
      setToken(token);
      setCurrentUser(user);
      setPage("dashboard");
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch {
      // aunque falle el servidor, cerramos la sesión localmente
    }
    clearToken();
    setCurrentUser(null);
    setPage("login");
  };

  if (checkingSession) return null;

  return (
    <div className="app">
      {page === "login" && (
        <Login
          onLogin={handleLogin}
          onRegister={() => setPage("register")}
        />
      )}

      {page === "register" && (
        <Register
          onRegister={handleRegister}
          onBack={() => setPage("login")}
        />
      )}

      {page === "dashboard" && currentUser && (
        <Dashboard
          user={currentUser}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}

export default App;
