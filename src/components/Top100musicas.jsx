import data from '../spotify_data.history.json';
export const TopTracks = () => {
  const data = []; // Certifique-se de definir ou importar a variável 'data'

  const getTopTracks = () => {
    const trackPlayTimes = {};

    data.forEach((item) => {
      const trackName = item.master_metadata_track_name;
      trackPlayTimes[trackName] = (trackPlayTimes[trackName] || 0) + item.ms_played;
    });

    const sortedTracks = Object.entries(trackPlayTimes)
      .sort((a, b) => b[1] - a[1])
      .map(([trackName, playTime]) => ({ trackName, playTime }));

    return sortedTracks.slice(0, 100);
  };

  const topTracks = getTopTracks(); // Não é necessário usar useMemo aqui

  return (
    <div>
      <h3>Top 100 Músicas por Tempo de Escuta</h3>
      <p>{topTracks.length}</p>
      <ol>
        {topTracks.map(({ trackName, playTime }, index) => (
          <li key={trackName}>
            <p>{index + 1}. {trackName} ({playTime / 60000} minutos) {/* Correção na fórmula */}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};;