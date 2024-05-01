import data from "../spotify_data.history.json";

const albumPlayTimes = data.reduce((times, record) => {
  const album = record.track_metadata_album_album_name;
  times[album] = (times[album] || 0) + record.ms_played;
  return times;
}, {});

const albumsArray = Object.entries(albumPlayTimes);

const TopAlbums = albumsArray
  .sort((a, b) => b[1] - a[1])
  .slice(0, 100);

export function RenderAlbums() {
  return (
    <div>
      {TopAlbums.map((album, index) => (
        <div key={index}>
          <p>{album[0]}</p>
          <p>{album[1]}</p>
        </div>
      ))}
    </div>
  );
}