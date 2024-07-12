import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../redux/actions";

const FirstRow = () => {
  const rockSongs = useSelector(state => state.mainHomeReducer.rockClassic);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongs("ROCK_CLASSIC", "queen"));
    console.log(rockSongs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return rockSongs.slice(0, 4).map(song => (
    <div className="col text-center" key={song.id}>
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>
        Track: {song.title}
        <br />
        Artist: {song.artist.name}
      </p>
    </div>
  ));
};
export default FirstRow;
