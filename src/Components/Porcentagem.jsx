import data from "../spotify_data.history.json";

const ArtistPlayCount = data.reduce ((counts, record) => {
    const artist = record.master_metadata_album_artist_name
    counts[artist] = (counts[artist] || 0) + 1
    return counts
}, {})

const artistsArray = Object.entries(ArtistPlayCount)


 const TopArtists = artistsArray.sort((a, b) => b[1] - a[1]).slice(0, 100)
 export function RenderTopArtists() {
    return (
        <div>
            {TopArtists.map((artist, index) => (
                <div key={index}>
                    <p>{artist[0]}</p>
                    <p>{artist[1]}</p>
                    <p>{artist[1] / 100}</p>
                </div>
            ))}
        </div>
    )
}
  