import { UsersRound, Gamepad2, Monitor, LockKeyhole } from "lucide-react";

function LobbyCard({ lobby }) {
  return (
    <div className="lobby-card">
      <div className="lobby-card-header">
        <div>
          <span className="lobby-status">
            <span className="status-dot"></span>
            LOBBY DISPONIBLE
          </span>
          <h3>{lobby.name}</h3>
          <p className="lobby-host">
            Creado por <span>{lobby.host}</span>
          </p>
        </div>

        {lobby.private && (
          <LockKeyhole size={19} className="private-icon" />
        )}
      </div>

      <div className="lobby-info">
        <div>
          <Gamepad2 size={17} />
          <span>{lobby.game}</span>
        </div>
        <div>
          <UsersRound size={17} />
          <span>{lobby.mode}</span>
        </div>
        <div>
          <Monitor size={17} />
          <span>{lobby.platform}</span>
        </div>
      </div>

      <div className="lobby-card-footer">
        <span className="player-count">
          <UsersRound size={17} />
          {lobby.players}/{lobby.maxPlayers} jugadores
        </span>

        <button className="join-btn" disabled={lobby.players >= lobby.maxPlayers}>
          {lobby.players >= lobby.maxPlayers ? "LLENA" : "ENTRAR"}
        </button>
      </div>
    </div>
  );
}

export default LobbyCard;