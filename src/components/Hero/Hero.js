import React from "react";

import { Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
        <Row className="h-100 align-items-center">
          <Col md={{ span: 6, offset: 1 }} className="text-left">
            <h1 className="hero-title font-weight-bolder">No Matter how you say it</h1>
            <h3 className="hero-subtitle">Hunger hurts!</h3>
            <p className="hero-text text-left">Join this movement that prides itself on being a little different.</p>
            <Button size="lg">Read me</Button>
          </Col>
        </Row>
    </div>
  );
}
export default Hero;
