import React from "react";
import { CardStack, Separator, ThreeSteps, Hero, Locations, Parallax } from "../../components";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <CardStack></CardStack>
      <Locations />
      <Parallax />
    </>
  );
}

export default HomePage;
