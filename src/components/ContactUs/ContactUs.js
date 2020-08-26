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
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="5" placeholder="Your Question"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>

      <Col xs="6">
        <h3 className="p-0 contect-title">We'd love to hear from you</h3>
        <h5>just say hello</h5>
        <p className="mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </p>
        <h5 className="mt-3">Need Help?</h5>
        <span>Contact example@gmail.com</span>
      </Col>
    </Row>
  );
}

export default ContactUs;
