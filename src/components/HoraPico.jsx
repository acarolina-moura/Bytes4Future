import React, { useMemo } from 'react';
import data from './spotify_data.json';

export const PeakListeningTime = () => {
  const getPeakListeningHour = () => {
    const hourCount = {};

    data.forEach((item) => {
      const date = new Date(item.ts);
      const hour = date.getHours();
      hourCount[hour] = (hourCount[hour] || 0) + item.ms_played;
    });

    let maxHour = 0;
    let maxPlayTime = 0;

    for (const hour in hourCount) {
      if (hourCount[hour] > maxPlayTime) {
        maxHour = hour;
        maxPlayTime = hourCount[hour];
      }
    }

    return maxHour;
  };

  const peakListeningHour = useMemo(() => getPeakListeningHour(), []);

  // Renderizar o componente
  return (
    <div>
      <h3>Hora de Pico de Reprodução</h3>
      <p>{peakListeningHour}h</p>
    </div>
  );
};