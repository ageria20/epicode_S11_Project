import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAV, getSongs, REMOVE_FAV, SELECTED_SONG } from "../redux/actions/index";

const FirstRow = () => {
  const rockSongs = useSelector(state => state.mainHomeReducer.rockClassic);

  const likedSongs = useSelector(state => state.favourites.likedSongs);

  const dispatch = useDispatch();

  const isSelected = song => {
    likedSongs.some(likedSong => likedSong?.id === song.id);
  };

  const handleClick = songSelected => {
    isSelected(songSelected)
      ? dispatch({ type: ADD_FAV, payload: songSelected })
      : dispatch({ type: REMOVE_FAV, payload: songSelected });
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
        dispatch({ type: SELECTED_SONG, payload: song });
      }}
    >
      <div className="position-relative">
        <img className="img-fluid position-relative" src={song.album.cover_medium} alt="track" />

        <i
          onClick={() => {
            handleClick(song);
          }}
          className={
            isSelected(song)
              ? "bi bi-heart-fill position-absolute bottom-0 end-0 m-3"
              : "bi bi-heart position-absolute bottom-0 end-0 m-3"
          }
        ></i>
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
