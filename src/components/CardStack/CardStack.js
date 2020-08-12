import React from "react";

import "./CardStack.css";

import { Container, Row, Col } from "react-bootstrap";
function CardStack() {
  return (
    <>
      <Container>
        <Row className="stack justify-content-md-center">
          <Col xs>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt=" "/>
          </Col>
          <Col xs>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt=" "/>
          </Col>
          <Col xs>
            <img src="https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg" alt=" "/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CardStack;
