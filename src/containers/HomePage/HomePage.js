import React from "react";
import {
  CardStack,
  Counter,
  Hero,
  TwoCardCarousel,
  Locations,
  Testimonial,
  ContactUs,
} from "../../components";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Counter />
      <TwoCardCarousel />
      <CardStack />
      <Locations />
      <Testimonial />
      <ContactUs />
    </>
  );
}

export default HomePage;
