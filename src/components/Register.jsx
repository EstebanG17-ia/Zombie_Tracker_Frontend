import { useState } from "react";
import { Crosshair, LockKeyhole, Mail, UserRound } from "lucide-react";
import "../styles/Auth.css";

function Register({ onRegister, onBack }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Completa todos los campos.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingresa un correo válido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    const result = await onRegister({
      username: username.trim(),
      email: email.trim(),
      password,
    });
    setLoading(false);

    if (!result.success) {
      setError(result.message);
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

        <h2>Crear cuenta</h2>
        <p className="auth-description">
          Regístrate para unirte a las partidas
        </p>

        <form onSubmit={handleSubmit}>
          <label>Nombre de la cuenta</label>
          <div className="input-group">
            <UserRound size={19} />
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label>Correo electrónico</label>
          <div className="input-group">
            <Mail size={19} />
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Contraseña</label>
          <div className="input-group">
            <LockKeyhole size={19} />
            <input
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <label>Confirmar contraseña</label>
          <div className="input-group">
            <LockKeyhole size={19} />
            <input
              type="password"
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "CREANDO..." : "CREAR CUENTA"}
          </button>
        </form>

        <div className="auth-footer">
          <p>¿Ya tienes una cuenta?</p>
          <button className="btn-link" onClick={onBack}>
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;