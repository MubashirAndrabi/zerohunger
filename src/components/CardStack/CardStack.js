import React from "react";

import "./CardStack.css";

import { Card, Container, Row, Col } from "react-bootstrap";
function CardStack() {
  return (
    <>
      <Container>
        <Row className="stack justify-content-md-center">
          <Col xs>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" />
          </Col>
          <Col xs>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" />
          </Col>
          <Col xs>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardStack;
