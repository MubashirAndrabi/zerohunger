import React from "react";
import { CardStack, Hero, Locations, Parallax, ContactUs } from "../../components";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <CardStack></CardStack>
      <Locations />
      <Parallax />
      <ContactUs />
    </>
  );
}

export default HomePage;
