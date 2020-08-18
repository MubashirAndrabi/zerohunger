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
            Hungry! Need groceries? Sign up for free today. Providing Healthy
            Food For Hungry Neighbours.
          </p>
        </Col>{" "}
        <Col xs>
          <img src={location} alt=" " />
          <h5 className="font-weight-bold">Pick a Location</h5>
          <p>
            Please select your nearest convenient location as per the
            availability to serve you better.
          </p>
        </Col>
        <Col xs>
          <img src={grocery} alt=" " />
          <h5 className="font-weight-bold">Pick up/ Get 'em delivered</h5>
          <p>
            Choice is yours! You can pick up food from your nearest location or
            we can deliver it to your doorsteps.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default CardStack;
