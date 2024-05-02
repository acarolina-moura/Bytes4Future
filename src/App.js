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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // este é ROUTER para ter mais de uma página no projeto

function App() {
  return (
    // Como criamos a sidebar como componente podemos reutilizá-la aqui dentro da App.js como abaixo:
  //   <Router>
  //   <div>
  //     <Sidebar />
  //     <Switch>
  //       <Route path="/Estatisticas" component={Estatistica} />
  //       <Route path="/outra" component={OutraPagina} />
  //       {/* Outras rotas aqui */}
  //     </Switch>
  //   </div>
  // </Router>
    
    <div className="App">
      <section className="wrapPage">
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

          <div className="cardPlays"></div>
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
