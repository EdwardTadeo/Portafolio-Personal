import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos 🖐, Soy <span className="purple">Frank Tadeo Espinoza </span>
            Soy de <span className="purple"> Lima, Perú.</span>
            <br /> Soy un estudiante universitario de Ingeniería de Sistemas, apasionado
            por la programación en la Universidad Católica Sedes Sapientiae
            <br />
            <br />
            Además de la programación disfruto de otras actividades como:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Los videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> La Música
            </li>
            <li className="about-activity">
              <ImPointRight /> La Lectura
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Si se puede imaginar, se puede programar!"{" "}
          </p>
          <footer className="blockquote-footer">😎</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
