import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src="#" alt="Logo Spotify"></img>
      <ul>
        <li>
          <img src="#" alt="icon início">
            Início
          </img>
        </li>
        <li>
          <img src="#" alt="icon procurar">
            Procurar
          </img>
        </li>
        <li>
          <img src="#" alt="icon biblioteca">
            A tua Biblioteca
          </img>
        </li>
      </ul>
      <ul>
        <li>
          <img src="#" alt="icon playlist">
            Criar Playlist
          </img>
        </li>
        <li>
          <img src="#" alt="icon musicas">
            Músicas Curtidas
          </img>
        </li>
        <li>
          <img src="#" alt="icon episodios">
            Os teus Episódios
          </img>
        </li>
      </ul>
      <hr />
      <ul>
        <li>Jazz</li>
        <li>Hangover Cure</li>
        <li>Your Top Songs 2022</li>
        <li>Indie</li>
        <li>Rock</li>
        <li>RADAR</li>
        <li>TOP 100</li>
      </ul>
      <hr />
      <ul>
        <li>
          <img src="#" alt="icon estatísticas">
            Estatísticas
          </img>
        </li>
      </ul>
      <button>
        <img src="#" alt="icon língua">
          Português
        </img>
      </button>
    </div>
  );
}

export default Sidebar;
