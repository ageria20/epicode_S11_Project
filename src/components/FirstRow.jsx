import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_FAV, getSongs, REMOVE_FAV, SELECTED_SONG } from "../redux/actions/index";
import { Heart, HeartFill } from "react-bootstrap-icons";

const FirstRow = () => {
  const rockSongs = useSelector(state => state.mainHomeReducer.rockClassic);
  const selected = useSelector(state => state.mainHomeReducer.selected);
  const likedSongs = useSelector(state => state.favourites.likedSongs);

  const dispatch = useDispatch();

  const isSelected = likedSongs.some(likedSong => likedSong?.id === selected?.id);

  useEffect(() => {
    dispatch(getSongs("ROCK_CLASSIC", "queen"));

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

        {isSelected ? (
          <HeartFill
            className="position-absolute"
            style={{ bottom: "20", left: "0" }}
            onClick={() => dispatch({ type: ADD_FAV, payload: song })}
          />
        ) : (
          <Heart
            className="position-absolute"
            style={{ bottom: "10", right: "10" }}
            onClick={() => dispatch({ type: REMOVE_FAV, payload: song })}
          />
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
