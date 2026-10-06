import {
  UserRound,
  Gamepad2,
  Layers3,
  Monitor,
  RefreshCw,
  Plus,
  UsersRound,
  LogOut,
} from "lucide-react";

function Sidebar({ user, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-heading">
          <div className="profile-button">
            <UserRound size={20} />
            <span>{user.username}</span>
          </div>

          <div className="filter-buttons">
            <button className="filter-btn">
              <Gamepad2 size={18} />
              <span>Juego</span>
            </button>

            <button className="filter-btn">
              <Layers3 size={18} />
              <span>Modo</span>
            </button>

            <button className="filter-btn">
              <Monitor size={18} />
              <span>Plataforma</span>
            </button>
          </div>
        </div>

        <div className="sidebar-actions">
          <button className="sidebar-btn">
            <RefreshCw size={19} />
            <span>Actualizar</span>
          </button>

          <button className="sidebar-btn">
            <Plus size={19} />
            <span>Crear lobby</span>
          </button>

          <button className="sidebar-btn">
            <UsersRound size={19} />
            <span>Unirse</span>
          </button>
        </div>
      </div>

      <div className="sidebar-bottom">
        <button className="logout-btn" onClick={onLogout}>
          <LogOut size={19} />
          <span>Salir</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;