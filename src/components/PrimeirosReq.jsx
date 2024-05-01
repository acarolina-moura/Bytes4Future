import React, { useMemo } from 'react';
import data from '../spotify_data.history.json';

export const MusicAnalytics = () => {
  const getTotalPlays = () => {
    return data.length;
  };

  const getUniqueTracks = () => {
    const trackSet = new Set(data.map((item) => item.master_metadata_track_name));
    return trackSet.size;
  };

  const getTotalPlayTime = () => {
    return data.reduce((total, item) => total + item.ms_played, 0);
  };

  const totalPlays = useMemo(() => getTotalPlays(), []);
  const uniqueTracks = useMemo(() => getUniqueTracks(), []);
  const totalPlayTime = useMemo(() => getTotalPlayTime(), []);

  return (
    <div>
      <h2>Análise de Música</h2>
      <p>Total de reproduções: {totalPlays}</p>
      <p>Faixas únicas: {uniqueTracks}</p>
      <p>Tempo total de reprodução: {totalPlayTime / 1000 / 60} minutos</p>
    </div>
  );
};