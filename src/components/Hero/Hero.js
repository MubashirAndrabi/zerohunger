import React from "react";

import { Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
        <Row className="h-100 align-items-center">
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h1 className="hero-title font-weight-bolder">dummy text of the printing</h1>
            <p className="hero-subtitle">remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </p>
            <Button size="lg">Read me</Button>
          </Col>
        </Row>
    </div>
  );
}
export default Hero;
