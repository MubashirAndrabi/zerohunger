import React from "react";

import { Card } from "react-bootstrap";
function ThreeSteps(props) {
  return (
    <div className="row">
      <div className="column">
        <Card style={{ width: "25rem", border: "none" }}>
          <Card.Body style={{ padding: "0.25rem" }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="column">
        <Card style={{ width: "25rem", border: "none" }}>
          <Card.Body style={{ padding: "0.25rem" }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="column">
        <Card style={{ width: "25rem", border: "none" }}>
          <Card.Body style={{ padding: "0.25rem" }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ThreeSteps;
