import React from "react";
import config from "../../config.js";

function Footer() {
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-12 about-company">
            <img src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1459544225/m9ywqs1gyaqq2c7np1zf.png" />
          </div>
          <div className="col-md-2 col-xs-12 links1">
            <ul className="m-0 p-0">
              {config.custom.footer1.map((item) => {
                return <li>{item.label}</li>;
              })}
            </ul>
          </div>
          <div className="col-md-2 col-xs-12 links2">
            <ul className="m-0 p-0">
              {config.custom.footer2.map((item) => {
                return <li>{item.label}</li>;
              })}
            </ul>
          </div>
          <div className="col-md-2 col-xs-12 links3">
            <ul className="m-0 p-0">
              {config.custom.footer3.map((item) => {
                return <li>{item.label}</li>;
              })}
            </ul>
          </div>
          <div className="col-md-2 col-xs-12 location">
            <span>
              <i className="fa fa-facebook mr-2"></i>{" "}
              <i className="fa fa-twitter mr-2"></i>{" "}
              <i className="fa fa-youtube mr-2"></i>{" "}
              <i className="fa fa-instagram mr-2"></i>{" "}
              <i className="fa fa-rss mr-2"></i>
            </span>
          </div>
        </div>
        <hr className="hrbig" />
        <div className="col copyright">
          <p className="">
            <small>© 2019. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
