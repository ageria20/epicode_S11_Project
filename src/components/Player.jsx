const Player = props => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
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
        </div>
      </div>
    </div>
  );
};
export default Player;
