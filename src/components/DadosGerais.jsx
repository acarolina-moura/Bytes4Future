const MusicAnalytics = ({ data }) => {
  const {
    totalPlays,
    uniqueTracks,
    totalPlayTime,
    averageDailyPlayTime,
    peakListeningHour,
    peakListeningSeasonTopArtists,
    topTracks,
    topAlbums,
  } = useMemo(() => {
    // Realize os cálculos necessários aqui
    const totalPlays = data.length;
    const uniqueTracks = new Set(data.map((item) => item.track_name)).size;
    const totalPlayTime = data.reduce(
      (total, item) => total + item.ms_played,
      0
    );
    const averageDailyPlayTime = totalPlayTime / (365 * 24 * 60 * 60 * 1000); // Suposição de um ano

    return {
      totalPlays,
      uniqueTracks,
      totalPlayTime,
      averageDailyPlayTime,
    };
  }, [data]);
};
