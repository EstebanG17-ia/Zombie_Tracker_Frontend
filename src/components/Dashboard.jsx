import Sidebar from "./Sidebar";
import LobbyCard from "./LobbyCard";
import { RadioTower } from "lucide-react";
import "../styles/Dashboard.css";

const exampleLobbies = [
  {
    id: 1,
    name: "The Dark Aether",
    host: "ZombieHunter",
    game: "Black Ops 3",
    mode: "Zombies",
    platform: "PC",
    players: 2,
    maxPlayers: 4,
    private: false,
  },
  {
    id: 2,
    name: "Origins Easter Egg",
    host: "Shadow",
    game: "Black Ops 2",
    mode: "Zombies",
    platform: "PlayStation",
    players: 3,
    maxPlayers: 4,
    private: false,
  },
  {
    id: 3,
    name: "Der Eisendrache",
    host: "MaxAmmo",
    game: "Black Ops 3",
    mode: "Zombies",
    platform: "PC",
    players: 1,
    maxPlayers: 4,
    private: true,
  },
  {
    id: 4,
    name: "Kino der Toten",
    host: "Element115",
    game: "Black Ops 1",
    mode: "Zombies",
    platform: "Xbox",
    players: 2,
    maxPlayers: 4,
    private: false,
  },
];

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      <Sidebar user={user} onLogout={onLogout} />

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>LOBBY <span>FINDER</span></h1>
            <p>Encuentra jugadores y comienza una partida</p>
          </div>

          <div className="connection-status">
            <RadioTower size={17} />
            <span>Modo demostración</span>
          </div>
        </header>

        <section className="welcome-section">
          <div>
            <p className="welcome-subtitle">BIENVENIDO AL DARK AETHER</p>
            <h2>Hola, <span>{user.username}</span></h2>
            <p>Encuentra una lobby y prepárate para sobrevivir.</p>
          </div>
        </section>

        <section className="lobbies-section">
          <div className="section-heading">
            <div>
              <h2>Lobbys disponibles</h2>
              <p>Partidas de otros jugadores</p>
            </div>

            <span className="lobby-total">
              {exampleLobbies.length} PARTIDAS
            </span>
          </div>

          <div className="lobbies-grid">
            {exampleLobbies.map((lobby) => (
              <LobbyCard key={lobby.id} lobby={lobby} />
            ))}
          </div>
        </section>

        <footer className="dashboard-footer">
          DARK AETHER <span>•</span> ZOMBIES LOBBY SYSTEM
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;