import React from "react";
import "./Separator.css";
import { Row, Col } from "react-bootstrap";
function Separator() {
  return (
    <Row>
      <Col md={1}></Col>
      <Col md={2} className="second">
        <hr className="horiontalSeparator"></hr>
      </Col>
      <Col md={9}></Col>
    </Row>
  );
}

export default Separator;
