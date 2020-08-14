import React from "react";

import "./CardStack.css";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";

import { Container, Row, Col, Figure } from "react-bootstrap";
function CardStack() {
  return (
    <div className="row">
      <div className="column">
        <img src={one} alt="Snow" style={{ width: "100%", height: "60%" }} />
        <h3> Food Bank's in Toronto</h3>
      </div>
      <div class="column">
        <img src={two} alt="Forest" style={{ width: "100%", height: "60%" }} />
        <h3> Food Bank's in Mississauga</h3>
      </div>
      <div class="column">
        <img
          src={three}
          alt="Mountains"
          style={{
            width: "100%",
            height: "60%",
          }}
        />
        <h3> Food Bank's in Brampton</h3>
      </div>
    </div>
  );
}

export default CardStack;
