import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, selectedSong } from "../redux/actions/index";

const FirstRow = () => {
  const rockSongs = useSelector(state => state.mainHomeReducer.rockClassic);

  const [songSelectedId, setSongSelectedId] = useState(null);
  const dispatch = useDispatch();

  const handleClick = songSelected => {
    dispatch(selectedSong(songSelected));
  };
  const handleClickHeart = songId => {
    setSongSelectedId(songId);
  };

  useEffect(() => {
    dispatch(getSongs("ROCK_CLASSIC", "queen"));
    console.log(rockSongs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return rockSongs.slice(0, 4).map(song => (
    <div
      className="col text-center"
      key={song.id}
      onClick={() => {
        console.log(song);
        handleClick(song);
      }}
    >
      <div className="position-relative">
        <img className="img-fluid position-relative" src={song.album.cover_medium} alt="track" />
        {songSelectedId === song.id ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-heart position-absolute bottom-0 end-0 m-3"
            viewBox="0 0 16 16"
            onClick={() => handleClickHeart(song.id)}
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor"
            className="bi bi-heart-fill position-absolute bottom-0 end-0 m-3"
            viewBox="0 0 16 16"
            onClick={() => handleClickHeart(song.id)}
          >
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
          </svg>
        )}
      </div>
      <p>
        Track: {song.title}
        <br />
        Artist: {song.artist.name}
      </p>
    </div>
  ));
};
export default FirstRow;
