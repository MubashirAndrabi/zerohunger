import React from "react";
import { Row, Col, Card, Button, Carousel } from "react-bootstrap";
import Carousell from "../Carousell/Carousell.js";
import gethelp from "../../assets/gethelp.png";
import givehelp from "../../assets/givehelp.png";

import "./TwoCardCarousel.css";

function TwoCardCarousel(props) {
  return (
    <Row className="p-5">
      <Col md="3" className="container">
        <img src={gethelp} />
        <button class="btn">Get Help</button>
      </Col>

      <Col md="3" className="container">
        <img src={givehelp} />
        <button class="btn">Give Help</button>
      </Col>

      <Col md="6" className="col6">
        <Carousell />
      </Col>
    </Row>
  );
}

export default TwoCardCarousel;
