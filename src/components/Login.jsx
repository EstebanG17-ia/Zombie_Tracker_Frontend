import { useState } from "react";
import { Crosshair, LockKeyhole, UserRound } from "lucide-react";
import "../styles/Auth.css";

function Login({ onLogin, onRegister }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!identifier.trim() || !password) {
      setError("Completa todos los campos.");
      return;
    }

    setLoading(true);
    const result = await onLogin(identifier.trim(), password);
    setLoading(false);

    if (!result.success) {
      setError(result.message || "Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <Crosshair size={48} />
          <h1>DARK AETHER</h1>
          <p>ZOMBIES LOBBY SYSTEM</p>
        </div>

        <h2>Iniciar sesión</h2>
        <p className="auth-description">
          Ingresa a tu cuenta para continuar
        </p>

        <form onSubmit={handleSubmit}>
          <label>Username / Correo</label>
          <div className="input-group">
            <UserRound size={19} />
            <input
              type="text"
              placeholder="Usuario o correo"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </div>

          <label>Contraseña</label>
          <div className="input-group">
            <LockKeyhole size={19} />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "ENTRANDO..." : "INICIAR SESIÓN"}
          </button>
        </form>

        <div className="auth-footer">
          <p>¿No tienes una cuenta?</p>
          <button className="btn-link" onClick={onRegister}>
            Crear cuenta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;