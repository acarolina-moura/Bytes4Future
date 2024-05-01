import data from "../spotify_data.history.json";
import React, { useMemo } from "react";

const ArtistDetails = ({ artistName }) => {
  const getArtistDetails = () => {
    const artistData = data.filter(
      (item) => item.master_metadata_album_artist_name === artistName
    );

    const totalPlays = artistData.length;
    const uniqueTracks = new Set(
      artistData.map((item) => item.master_metadata_track_name)
    ).size;
    const totalPlayTime = artistData.reduce(
      (total, item) => total + item.ms_played,
      0
    );

    const totalOverallPlays = data.length;
    const playPercentage = (totalPlays / totalOverallPlays) * 100;

    const trackPlayTimes = {};
    artistData.forEach((item) => {
      const trackName = item.master_metadata_track_name;
      trackPlayTimes[trackName] =
        (trackPlayTimes[trackName] || 0) + item.ms_played;
    });
    const topTracks = Object.entries(trackPlayTimes)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([trackName, playTime]) => ({ trackName, playTime }));

    return {
      totalPlays,
      uniqueTracks,
      totalPlayTime,
      playPercentage,
      topTracks,
    };
  };

  const { totalPlays, uniqueTracks, totalPlayTime, playPercentage, topTracks } =
    useMemo(() => getArtistDetails(), [artistName]);

  return (
    <div>
      <h3>{artistName}</h3>
      <p>Total plays: {totalPlays}</p>
      <p>Unique tracks: {uniqueTracks}</p>
      <p>Total playtime: {totalPlayTime / 1000 / 60} minutes</p>
      <p>Percentage of total plays: {playPercentage.toFixed(2)}%</p>
      <h4>Top 20 songs</h4>
      <ol>
        {topTracks.map(({ trackName, playTime }, index) => (
          <li key={trackName}>
            {index + 1}. {trackName} ({playTime / 1000 / 60} minutes)
          </li>
        ))}
      </ol>
    </div>
  );
};
