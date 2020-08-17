import React from "react";

import "./Locations.css";
import { Row, Col, ListGroup } from "react-bootstrap";

import icon from "../../assets/correct.png";
import ThreeSteps from "../ThreeSteps/ThreeSteps";

function Locations() {
  return (
    <Row className="p-5 location">
      <Col xs="6">
        <h1 className="text-center font-weight-bold">Our Locations</h1>
      </Col>
      <Col xs="3">
        <ListGroup no>
          <ListGroup.Item>
            <img src={icon} alt=" " />
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={icon} alt=" " />
            Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={icon} alt=" " />
            Morbi leo risus
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col xs="3">
        <ListGroup no>
          <ListGroup.Item>
            <img src={icon} alt=" " />
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={icon} alt=" " />
            Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={icon} alt=" " />
            Morbi leo risus
          </ListGroup.Item>
        </ListGroup>
      </Col>
    <Col>
    <ThreeSteps />
    </Col>
    </Row>
  );
}

export default Locations;
