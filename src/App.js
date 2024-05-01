import "./App.css";
import React, { useMemo } from "react";
import { ArtistPlayCount } from "./components/Top100Artistas"; // top 100 artistas
import { AlbumPlayTimes } from "./components/Top100Albums"; // top 100 albums
import { TopTracks } from "./components/Top100musicas"; // top 100 musicas
import { MusicAnalytics } from "./components/PrimeirosReq"; // primeiros requisitos
import  { PeakListeningTime } from "./components/HoraPico" // hora mais ouvida
import  { SeasonArtist } from "./components/SeasonPeak" // qual estação ele mais ouviu o artista





function App() {
  return (
    <div className="App">
      <Artistas />
      <Faixas />

        <section className="wrapPage">
        <div>
          <h2>Olá, Rajarshi B.</h2>
          <h2>
            Traduzimos sua playlist em números. Agora só falta apertar o play!
          </h2>
        </div>
        <div className="cardsContent">
          <h3>AS MINHAS ESTATÍSTICAS</h3>
          <h3>{TopTracks}</h3>

          <div className="cardPlays">
          
          </div>

          <div className="cardDifSongs">
          
          </div>

          <div className="cardTotalPlays">
          

          </div>
          <div className="cardDateTime">
           

          </div>
          <div className="cardSeason">
          

          </div>
          <div className="cardAvarage">
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
