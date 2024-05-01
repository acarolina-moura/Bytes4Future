import React, { useMemo } from "react";
import data from "../spotify_data.history.json";

export const TopAlbums = () => {
  const getAlbumPlayTimes = () => {
    const albumPlayTimes = data.reduce((times, record) => {
      const album = record.master_metadata_album_album_name;
      times[album] = (times[album] || 0) + record.ms_played;
      return times;
    }, {});

    const albumsArray = Object.entries(albumPlayTimes);
    const topAlbums = albumsArray
      .sort((a, b) => b[1] - a[1])
      .slice(0, 100)
      .map(([albumName, playTime]) => ({ albumName, playTime }));

    return topAlbums;
  };

  const topAlbums = useMemo(() => getAlbumPlayTimes(), []);

  return (
    <div>
      <h3>Top 100 Álbuns por Tempo de Reprodução</h3>
      <ul>
        {topAlbums.map(({ albumName, playTime }, index) => (
          <li key={index}>
            <p>{albumName}</p>
            <p>{playTime / 1000 / 60} minutos</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
