import React from "react";

import "./Testimonial.css";

const Testimonial = () => {
  const quotes = {
    0: {
      client: "Client one, ON, CA",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    1: {
      client: "Client two, ON, CA",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    2: {
      client: "Client three, ON, CA",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    3: {
      client: "Client four, ON, CA",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    4: {
      client: "Client five, ON, CA",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  };

  const [current, setCurrent] = React.useState(quotes[0]);
  const [active, setActive] = React.useState(0);

  const handleClick = (event) => {
    setCurrent(quotes[event.target.getAttribute("data-quote")]);
    setActive(event.target.getAttribute("data-quote"));
  };
  return (
    <div className="parallax pt-5 pb-5" id="testimonial">
      <h1 className="parallax-title font-weight-bold">What People Say!</h1>
      <div className="parallax-text d-flex flex-column justify-content-center">
        <p>{current.quote}</p>
        <p>{current.client}</p>
        <div className="parallax-quotes d-flex justify-content-center">
          {Object.keys(quotes).map((index) => (
            <span
              onClick={(event) => handleClick(event)}
              data-quote={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
