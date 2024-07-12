import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, selectedSong } from "../redux/actions";

const SecondRow = () => {
  const popCulture = useSelector(state => state.mainHomeReducer.popCulture);
  const dispatch = useDispatch();

  const handleClick = songSelected => {
    dispatch(selectedSong(songSelected));
  };

  useEffect(() => {
    dispatch(getSongs("POP_CULTURE", "katyperry"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return popCulture.slice(0, 4).map(song => (
    <div className="col text-center" key={song.id}>
      <img className="img-fluid" src={song.album.cover_medium} alt="track" onClick={() => handleClick(song)} />
      <p>
        Track: {song.title}
        <br />
        Artist: {song.artist.name}
      </p>
    </div>
  ));
};
export default SecondRow;
