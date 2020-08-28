import React from "react";
import config from "../../config.js";
import { v4 as uuidv4 } from 'uuid';

import logo from "../../assets/logo.png";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-12 about-company ">
            <a href="/">
              {" "}
              <img
                alt=" "
                src={logo}
                style={{ width: "60%", paddingBottom: "10px" }}
              />{" "}
            </a>
          </div>
          <div className="col-md-2 col-xs-12 links1">
            <ul className="m-0 p-0 list-unstyled">
              {config.custom.footer1.map((item) => {
                return (
                  <li key={uuidv4()}>
                    <a href="/"> {item.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-2 col-xs-12 links2">
            <ul className="m-0 p-0 list-unstyled">
              {config.custom.footer2.map((item) => {
                return (
                  <li key={uuidv4()}>
                    {" "}
                    <a href="/"> {item.label}</a>{" "}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-2 col-xs-12 links3">
            <ul className="m-0 p-0 list-unstyled">
              {config.custom.footer3.map((item) => {
                return (
                  <li key={uuidv4()}>
                    <a href="/"> {item.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className="col-md-2 col-xs-12"
            style={{ marginTop: "10px", paddingLeft: "30px" }}
          >
            <span>
              <SocialIcon
                url="http://facebook.com"
                network="facebook"
                style={{ height: 25, width: 25, marginRight: "5px" }}
              />
              <SocialIcon
                url="http://twitter.com"
                network="twitter"
                style={{ height: 25, width: 25, marginRight: "5px" }}
              />
              <SocialIcon
                url="http://instagram.com"
                network="instagram"
                style={{ height: 25, width: 25, marginRight: "5px" }}
              />
              <SocialIcon
                url="http://youtube.com"
                network="youtube"
                style={{ height: 25, width: 25, marginRight: "5px" }}
              />
            </span>
          </div>
        </div>
        <hr className="hrbig" />
        <div className="col copyright">
          <p className="copy" style={{ textAlign: "center" }}>
            <small>© 2020. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
