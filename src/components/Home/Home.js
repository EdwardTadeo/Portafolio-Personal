import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import developerImg from "../../Assets/developer.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Buenaas!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  😎
                </span>
              </h1>

              <h1 className="heading-name">
                SOY
                <strong className="main-name"> FRANK TADEO ESPINOZA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
             
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
