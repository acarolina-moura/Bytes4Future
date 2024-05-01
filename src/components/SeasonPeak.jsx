import React from "react";

export const SeasonArtist = ({ artistName }) => {
  // o erro é que a lista de reproduções só está disponível aqui, não é passada como parâmetro
  const data = require("../spotify_data.history.json");

  const artistData = data.filter(
    (item) => item.master_metadata_album_artist_name === artistName
  );

  const totalPlayTime = artistData.reduce(
    (total, item) => total + item.ms_played,
    0
  );

  const seasonPlayTimes = {
    Inverno: 0,
    Primavera: 0,
    Verão: 0,
    Outono: 0,
  };

  artistData.forEach((item) => {
    const date = new Date(item.ts);
    const month = date.getMonth();
    const season = getSeasonFromMonth(month);
    seasonPlayTimes[season] += item.ms_played;
  });

  const peakListeningSeason = Object.entries(seasonPlayTimes).reduce(
    (maxSeason, [season, playTime]) =>
      playTime > seasonPlayTimes[maxSeason] ? season : maxSeason,
    ""
  );

  return (
    <div>
      <h3>Estação do Ano com Mais Reproduções de {artistName}</h3>
      <p>{peakListeningSeason}</p>
    </div>
  );
};

const getSeasonFromMonth = (month) => {
  switch (month) {
    case 0:
    case 1:
    case 11:
      return "Inverno";
    case 2:
    case 3:
    case 4:
      return "Primavera";
    case 5:
    case 6:
    case 7:
      return "Verão";
    case 8:
    case 9:
    case 10:
      return "Outono";
    default:
      return "";
  }
};
