import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs, selectedSong } from "../redux/actions";

const ThirdRow = () => {
  const hipHop = useSelector(state => state.mainHomeReducer.hipHop);
  const dispatch = useDispatch();

  const handleClick = songSelected => {
    dispatch(selectedSong(songSelected));
  };

  useEffect(() => {
    dispatch(getSongs("HIP_HOP", "eminem"));
    console.log;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return hipHop.slice(0, 4).map(song => (
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
export default ThirdRow;
