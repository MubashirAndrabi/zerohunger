import React from "react";
import { CardStack, Separator } from "../../components";
import "./HomePage.css";
import { Card } from "react-bootstrap";
import Hero from "../../components/Hero/Hero";

function HomePage() {
  return (
    <>
      <Hero />
      <CardStack />
      {/* <div className="container-2">
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
      </div> */}

      <hr></hr>
    </>
  );
}

export default HomePage;
