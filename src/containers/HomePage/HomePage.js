import React from "react";
import { CardStack, Separator, ThreeSteps } from "../../components";
import "./HomePage.css";
import { Card } from "react-bootstrap";
import Hero from "../../components/Hero/Hero";

function HomePage() {
  return (
    <>
      <div className="container-1">
        <Hero></Hero>
      </div>

      <h1 style={{ padding: "50px" }}>Explore exotic locations in Finland</h1>

      <CardStack></CardStack>

      <Separator />

      <div style={{ padding: "50px" }}>
        <h1>The sauna ritual (or how Attractr works).</h1>
      </div>

      <ThreeSteps />

      <div style={{ padding: "50px" }}>
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
