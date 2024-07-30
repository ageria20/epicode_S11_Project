import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, selectedSong } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";

const SecondRow = () => {
  const popCulture = useSelector(state => state.mainHomeReducer.popCulture);
  const likedSongs = useSelector(state => state.favourites.likedSongs);
  const dispatch = useDispatch();

  const handleClick = songSelected => {
    dispatch(selectedSong(songSelected));
  };

  useEffect(() => {
    dispatch(getSongs("POP_CULTURE", "katyperry"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return popCulture.slice(0, 4).map(song => {
    const isSelected = likedSongs.some(likedSong => likedSong?.id === song.id);
    return (
      <div className="col text-center " key={song.id}>
        <div className="position-relative">
          <img
            className="img-fluid position-relative"
            src={song.album.cover_medium}
            alt="track"
            onClick={() => handleClick(song)}
          />
          {isSelected ? (
            <HeartFill
              className="position-absolute"
              style={{ bottom: "10px", right: "10px" }}
              onClick={() => {
                dispatch({ type: "REMOVE_FAV", payload: song });
              }}
            />
          ) : (
            <Heart
              className="position-absolute"
              style={{ bottom: "10px", right: "10px" }}
              onClick={() => {
                dispatch({ type: "ADD_FAV", payload: song });
              }}
            />
          )}
        </div>
        <p>
          Track: {song.title}
          <br />
          Artist: {song.artist.name}
        </p>
      </div>
    );
  });
};
export default SecondRow;
