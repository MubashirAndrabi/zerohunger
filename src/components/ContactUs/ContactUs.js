import React from "react";

import "./ContactUs.css";
import { Row, Col, Form, Button } from "react-bootstrap";

function ContactUs() {
  return (
    <Row className="contact d-flex justify-content-center">
      <Col xs="6">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>

      <Col xs="6">
          <h3>We'd love to hear from you</h3>
      </Col>
    </Row>
  );
}

export default ContactUs;
