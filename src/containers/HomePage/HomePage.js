import React from "react";
import { CardStack, Separator, ThreeSteps, Hero, Locations } from "../../components";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <CardStack></CardStack>

      <Separator />

      <Locations />
      <ThreeSteps />
    </>
  );
}

export default HomePage;
