import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blackjack from "../../Assets/Projects/blackjack.png";
import emotion from "../../Assets/Projects/emotion.png";
import restaurant from "../../Assets/Projects/restaurant-page.png";
import login1 from "../../Assets/Projects/login1.png";
import pokemon from "../../Assets/Projects/pokemon.png";
import login2 from "../../Assets/Projects/login-animated.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          MIS TRABAJOS <strong className="purple">RECIENTES </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos de los <strong className="purple">trabajos </strong>que he realizado recientemente
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login1}
              isBlog={false}
              title="Login-Form"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/EdwardTadeo/Login-Page-Modern"
              demoLink="https://edwardtadeo.github.io/Login-Page-Modern/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login2}
              isBlog={false}
              title="Login-Form-Modern"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/EdwardTadeo/Login-Page-Modern-2"
              demoLink="https://edwardtadeo.github.io/Login-Page-Modern-2/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Fast Food Page"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/EdwardTadeo/Restaurant-Page"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackjack}
              isBlog={false}
              title="BlackJack"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/EdwardTadeo/BLACKJACK"
              demoLink="https://edwardtadeo.github.io/BLACKJACK/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="A Pokemon List"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/EdwardTadeo/POKEMON-DESIGN"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
