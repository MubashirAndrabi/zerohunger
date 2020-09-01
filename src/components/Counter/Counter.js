import React from "react";
import CountUp from "react-countup";
import "./Counter.css";
import knife from "../../assets/knife.png";
import open from "../../assets/open.png";
import people from "../../assets/people.png";

import { Row, Col } from "react-bootstrap";
function Counter(props) {
  return (
    <>
      <Row className="p-5">
        <Col md="4" className="text-center">
          <img src={knife} style={{ width: "20%", height: "auto" }} alt=" " />

          <span className="gradient-multiline">
            <CountUp
              start={0}
              end={5000}
              separator=","
              duration={3}
              delay={0.5}
            />
          </span>
          <h4 className="mt-3" style={{ color: "#505050" }}>
            people in crisis fed during the last year
          </h4>
        </Col>

        <Col md="4" className="text-center">
          <img src={open} style={{ width: "20%", height: "auto" }} alt=" " />

          <span className="gradient-multiline">
            <CountUp
              start={0}
              end={2020}
              separator=","
              duration={3}
              delay={0.5}
            />
          </span>
          <h4 className="mt-3" style={{ color: "#505050" }}>
            the year that our foodbank opened
          </h4>
        </Col>

        <Col md="4" className="text-center">
          <img src={people} style={{ width: "20%", height: "auto" }} alt=" " />

          <span className="gradient-multiline">1 in 7</span>
          <h4 className="mt-3" style={{ color: "#505050" }}>
            of the Canadian population live below the poverty line
          </h4>
        </Col>
      </Row>
    </>
  );
}

export default Counter;
