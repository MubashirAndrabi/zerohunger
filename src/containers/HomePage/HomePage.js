import React from "react";
import { Slider, CardStack, Separator } from "../../components";
import "./HomePage.css";
import { Row, Col, Container, Card } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <div className="container-1">
        <Slider></Slider>
      </div>

      <div className="container-3">
        <h1 className="headingHome">Explore exotic locations in Finland</h1>
      </div>

      <div className="container-2">
        <CardStack></CardStack>
      </div>
      <div className="container-2">
        <Separator />
      </div>

      <div className="container-3">
        <h1>The sauna ritual (or how Attractr works).</h1>
      </div>
      <div className="container-2">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="container-4">
        <h4>
          <a href="#">
            PS. You can also become a Food Bank in just a few clicks!
          </a>
        </h4>
      </div>

      <hr></hr>
    </>
  );
}

export default HomePage;
