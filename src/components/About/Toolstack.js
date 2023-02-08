import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,

} from "react-icons/si";
import{
  DiNetbeans,
  DiMysql
} from "react-icons/di"

import{
  VscTerminal
} from "react-icons/vsc"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNetbeans />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscTerminal />
      </Col>
    </Row>
  );
}

export default Toolstack;
