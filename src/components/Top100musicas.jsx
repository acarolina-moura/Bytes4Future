import data from "../spotify_data.history.json";
export const TopTracks = () => {
  const getTopTracks = () => {
    const trackPlayTimes = {};

    data.forEach((item) => {
      const trackName = item.master_metadata_track_name;
      trackPlayTimes[trackName] =
        (trackPlayTimes[trackName] || 0) + item.ms_played;
    });

    const sortedTracks = Object.entries(trackPlayTimes)
      .sort((a, b) => b[1] - a[1])
      .filter((entry) => entry[1] > 0)
      .map(([trackName, playTime]) => ({ trackName, playTime }));

    return sortedTracks.slice(1, 100);
  };

  const topTracks = getTopTracks();

  return (
    <div>
      <h3>Top 100 Músicas por Tempo de Escuta</h3>
      <p>TOP {topTracks.length + 1} Music</p>

      {topTracks.map(({ trackName, playTime }, index) => (
        <p key={trackName}>
          <p>
            {index + 1}. {trackName} ({Math.floor(playTime / 600000)} minutos)
          </p>
        </p>
      ))}
    </div>
  );
};
