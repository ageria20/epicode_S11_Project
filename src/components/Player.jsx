import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = props => {
  const selectedSong = useSelector(state => state.mainHomeReducer.selected);
  // console.log(selectedSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <Row className="">
            <Col xs={3}>
              <Row className="offset-ls-2">
                {selectedSong && (
                  <>
                    <Col xs={12} md={3}>
                      <img src={selectedSong.album.cover_small} alt="cover album" />
                    </Col>
                    <Col xs={12} md={9}>
                      <h5 style={{ color: "white", fontSize: "1rem" }}>Now Playing: {selectedSong.title}</h5>
                      <p style={{ color: "white", fontSize: "0.8rem" }}>Artist: {selectedSong.artist.name}</p>
                    </Col>
                  </>
                )}
              </Row>
            </Col>
            <Col xs={9}>
              <div className="row h-100 flex-column justify-content-center align-items-center">
                <div className="col-6 col-md-4 playerControls">
                  <div className="d-flex">
                    <a href="#">
                      <img src={props.shuffle} alt="shuffle" />
                    </a>
                    <a href="#">
                      <img src={props.prev} alt="prev" />
                    </a>
                    <a href="#">
                      <img src={props.play} alt="play" />
                    </a>
                    <a href="#">
                      <img src={props.next} alt="next" />
                    </a>
                    <a href="#">
                      <img src={props.repeat} alt="repeat" />
                    </a>
                  </div>

                  <div className="progress mt-3">
                    <div role="progressbar"></div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Player;
