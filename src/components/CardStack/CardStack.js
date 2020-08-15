import React from "react";

import "./CardStack.css";
import location from "../../assets/location.png";
import user from "../../assets/user.png";
import grocery from "../../assets/grocery.png";

import { Row, Col } from "react-bootstrap";
function CardStack() {
  return (
    <section className="cards">
      <h2 className="cards-title font-weight-bold">How it works</h2>
      <Row className="stack justify-content-md-center">
        <Col xs>
          <img src={user} alt=" " />
          <h5 className="font-weight-bold">Sign Up</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>{" "}
        <Col xs>
          <img src={location} alt=" " />
          <h5 className="font-weight-bold">Pick a Location</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col xs>
          <img src={grocery} alt=" " />
          <h5 className="font-weight-bold">Pick up/ Deliver your groceries</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default CardStack;
