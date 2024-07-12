import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, selectedSong, toggleLike } from "../redux/actions/index";

const FirstRow = () => {
  const rockSongs = useSelector(state => state.mainHomeReducer.rockClassic);
  const isLike = useSelector(state => state.mainHomeReducer.isLike);

  const dispatch = useDispatch();

  const handleClick = songSelected => {
    dispatch(selectedSong(songSelected));
  };

  const handleLike = songSelected => {
    dispatch(toggleLike());
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
        console.log(isLike);
        handleClick(song);
      }}
    >
      <div className="position-relative">
        <img className="img-fluid position-relative" src={song.album.cover_medium} alt="track" />

        <i
          onClick={() => handleLike()}
          className={
            isLike
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
