import React, { Component } from "react";
import Carousel from "@bit/react-bootstrap.react-bootstrap.carousel";
import ReactBootstrapStyle from "@bit/react-bootstrap.react-bootstrap.internal.style-links";

import carousell from "../../assets/carousell.png";

import "./Carousell.css";

class Carousell extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={carousell} alt="First slide" />
          <Carousel.Caption>
            <h3>We need your support</h3>
            <p>
              We rely on the support of our local community for food donations,
              volunteering and financing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousell} alt="Third slide" />

          <Carousel.Caption>
            <h3>This has been a Godsend</h3>
            <p>Heartfelt thanks from a client in Toronto</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousell} alt="Third slide" />

          <Carousel.Caption>
            <h3>Coronavirus 2020</h3>
            <p>
              Please see the NEWS and LOCATION pages for the latest updates and
              any changes to our services.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousell;
