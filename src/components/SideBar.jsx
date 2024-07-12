import { Col, FormControl, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchFetch } from "../redux/actions";

const SideBar = props => {
  const likedSong = useSelector(state => state.mainHomeReducer.likedSongs);
  const query = useSelector(state => state.searchAlbum.query);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch({ type: "QUERY", payload: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(searchFetch(query));
  };

  return (
    <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
      <div className="container flex-column align-items-start">
        <a className="navbar-brand" href="index.html">
          <img src={props.logo} alt="Spotify Logo" width="131" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <a className="nav-item nav-link d-flex align-items-center" href="#">
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </a>
              </li>
              <li>
                <a className="nav-item nav-link d-flex align-items-center" href="#">
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </a>
              </li>
              <li>
                <div className="input-group mt-3">
                  <FormControl
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-secondary btn-sm h-100" onClick={e => handleSubmit(e)}>
                      GO
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <Row>
                  {likedSong.length > 0 && (
                    <>
                      <Col xs={12} md={3}>
                        <img src={likedSong[0].album.cover_small} alt="cover album" />
                      </Col>
                      <Col xs={12} md={9}>
                        <h5 style={{ color: "white", fontSize: "1rem" }}>Now Playing: {likedSong[0].title}</h5>
                        <p style={{ color: "white", fontSize: "0.8rem" }}>Artist: {likedSong[0].artist.name}</p>
                      </Col>
                    </>
                  )}
                </Row>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-btn">
        <button className="btn signup-btn" type="button">
          Sign Up
        </button>
        <button className="btn login-btn" type="button">
          Login
        </button>
        <div>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </div>
      </div>
    </nav>
  );
};
export default SideBar;
