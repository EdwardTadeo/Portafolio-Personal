import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              UNA BREVE <span className="purple"> PRESENTACIÓN </span> SOBRE MÍ ✌
            </h1>
            <p className="home-about-body">
              Durante mi carrera, me he ido adentrando cada vez más al mundo de la programación, y he aprendido algunas cosas, creo… 🤷‍♂️
              <br />
              <br />Manejo de manera básica algunos lenguajes como
              <i>
                <b className="purple"> HTML, CSS, Javascript and React. </b>
              </i>
              <br />
              <br />
              Mi área de interés es la creación de aplicación web
              <i>
                <b className="purple"> sobre todo FrontEnd </b> y
                me gustaría aprender sobre áreas relacionadas a:{" "}
                <b className="purple">
                  Redes o Seguridad de la Información.
                </b>
              </i>
              <br />
              <br />
              Ultimamente estoy tratando de aprender lenguajes o Frameworks tales como: <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Angular and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              No dude en <span className="purple">comunicarse </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/EdwardTadeo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/FrankTadeo1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/frank-edward-tadeo-espinoza-aa922a243/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/frank_edward_01/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
