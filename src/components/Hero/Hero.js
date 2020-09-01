import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import "./Hero.css";

function Hero() {
  return (
        <Row className="h-100 align-items-center hero">
          <Col md={{span: 6, offset: 1 }} sm={6} lg={{span: 6, offset: 1 }} className="hero-div  mt-5 mb-5">
            <h1 className="hero-title font-weight-bolder">No Matter how you say it</h1>
            <h3 className="hero-subtitle">Hunger hurts!</h3>
            <p className="hero-text">Join this movement that prides itself on being a little different.</p>
            <Button size="sm">Read me</Button>
          </Col>
        </Row>
  );
}
export default Hero;
