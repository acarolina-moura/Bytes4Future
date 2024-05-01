import React, { useMemo } from 'react';
import data from '../spotify_data.history.json';

const TopArtists = () => {
  const getArtistPlayCount = () => {
    const artistPlayCount = data.reduce((counts, record) => {
      const artist = record.master_metadata_album_artist_name;
      counts[artist] = (counts[artist] || 0) + 1;
      return counts;
    }, {});

    const artistsArray = Object.entries(artistPlayCount);
    const topArtists = artistsArray
      .sort((a, b) => b[1] - a[1])
      .slice(0, 100)
      .map(([artistName, playCount]) => ({ artistName, playCount }));

    return topArtists;
  };

  const topArtists = useMemo(() => getArtistPlayCount(), []);

  return (
    <div>
      <h3>Top 100 Artistas por Número de Reproduções</h3>
      <ul>
        {topArtists.map(({ artistName, playCount }, index) => (
          <li key={index}>
            <p>{artistName}</p>
            <p>Reproduções: {playCount}</p>
            <p>Porcentagem: {(playCount / data.length * 100).toFixed(2)}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};