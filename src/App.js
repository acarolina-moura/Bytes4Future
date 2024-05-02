import data from "./spotify_data.history.json";
import "./App.css";

import React, { useMemo } from "react";
import { ArtistPlayCount } from "./components/Top100Artistas"; // top 100 artistas
import { AlbumPlayTimes } from "./components/Top100Albums"; // top 100 albums
import { TopTracks } from "./components/Top100musicas"; // top 100 musicas
import { MusicAnalytics } from "./components/PrimeirosReq"; // primeiros requisitos
import { PeakListeningTime } from "./components/HoraPico"; // hora mais ouvida
import { SeasonArtist } from "./components/SeasonPeak"; // qual estação ele mais ouviu o artista
import { ArtistDetails } from "./components/Artista-Req";
import { TopArtists } from "./components/Top100Artistas";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom"; // este é ROUTER para ter mais de uma página no projeto
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Sidebar />
          <Routes>
            <Route path="" element={<div>HOMEPAGE</div>} />
            <Route path="/estatisticas" element={<div>PAGINA DE ESTATISTICAS</div>} />
            <Route path="/outra" element={<div>PAGINA DE OUTRA</div>} />
          </Routes>
        </div>
      </Router>

      <section className="wrapPage">
        <div>
          <img src="" alt=""></img>
          <img src="" alt=""></img>
          <img src="" alt=""></img>
        </div>
        <div className="wraperDad">
          <div className="top100">
            <div className="smallDad">
              <div className="TopArtistas"></div>
              <div className="TopAlbuns"></div>
              <div className="TopMusicas"></div>
            </div>
          </div>
        </div>
        <div>
          <h2>Olá, Rajarshi B.</h2>
          <h2>
            Traduzimos sua playlist em números. Agora só falta apertar o play!
          </h2>
        </div>
        <div className="cardsContent">
          <h3>AS MINHAS ESTATÍSTICAS</h3>
          <PeakListeningTime />
          <TopTracks />
          <ArtistDetails artistName="Travis Scott" />
          <SeasonArtist artistName="Travis Scott" />
          <TopArtists />

          <div className="cardPlays">
            <MusicAnalytics />
          </div>
          <div className="cardDifSongs"></div>
          <div className="cardTotalPlays"></div>
          <div className="cardDateTime"></div>
          <div className="cardSeason"></div>
          <div className="cardAvarage"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
