import React from "react";
import {
  CardStack,
  Counter,
  Hero,
  TwoCardCarousel,
  Locations,
  Parallax,
  ContactUs,
} from "../../components";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Counter />
      <TwoCardCarousel />
      <CardStack></CardStack>
      <Locations />
      <Parallax />
      <ContactUs />
    </>
  );
}

export default HomePage;
