import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from "./assets/logo/logo.png";
import shuffle from "./assets/playerbuttons/shuffle.png";
import next from "./assets/playerbuttons/next.png";
import prev from "./assets/playerbuttons/prev.png";
import play from "./assets/playerbuttons/play.png";
import repeat from "./assets/playerbuttons/repeat.png";
import MainHome from "./components/MainHome";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <SideBar logo={logo} />
          </Col>
          <Col xs={12} md={9}>
            <MainHome />
          </Col>
        </Row>
      </Container>
      <Player shuffle={shuffle} next={next} prev={prev} play={play} repeat={repeat} />
    </>
  );
}

export default App;
