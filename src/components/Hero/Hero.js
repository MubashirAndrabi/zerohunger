import React from "react";

import { Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
        <Row className="h-100 align-items-center">
          <Col className="text-center">
            <h1 className="font-weight-light">
              Vertically Centered Masthead Content
            </h1>
            <p>A great starter layout for a landing page</p>
          </Col>
        </Row>
    </div>
  );
}
export default Hero;
