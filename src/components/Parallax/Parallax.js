import React from "react";
import { Carousel } from "react-bootstrap";

import "./Parallax.css";

const Parallax = () => {
  const quotes = {
    0: {
      client: "Client one, LA, US",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    1: {
      client: "Client one, NY, US",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    2: {
      client: "Client one, ON, CA",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    3: {
      client: "Client one, BC, US",
      quote:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    4: "client: Client one, BC, ON",
    quote:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  };

  const [current, setCurrent] = React.useState(quotes[0]);
  const [active, setActive] = React.useState(0);

  const handleClick = () => {
      console.log("hello");
  }
  return (
    <div className="parallax">
        <p>{current.quote}</p>
        <p>{current.client}</p>
        <div>
            {Object.keys(quotes).map(index => (
                <span onClick={event => handleClick(event)}
                data-quote={index}
                key={index}
                />
            ))}
        </div>
    </div>
  );
};
export default Parallax;
