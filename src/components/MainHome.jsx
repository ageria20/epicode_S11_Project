import { useSelector } from "react-redux";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import { Col, Row } from "react-bootstrap";

const MainHome = () => {
  const searchedSongs = useSelector(state => state.searchAlbum.searchedSongs);

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <Row>
        {searchedSongs.slice(0, 4).map(song => (
          <Col xs={6} lg={3} key={song.id} className="mt-5">
            <img className="img-fluid position-relative" src={song.album.cover_medium} alt="track" />
            <p>
              Track: {song.title}
              <br />
              Artist: {song.artist.name}
            </p>
          </Col>
        ))}
      </Row>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              <FirstRow />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
              <SecondRow />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
              <ThirdRow />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MainHome;
