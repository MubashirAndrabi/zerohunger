import React from "react";
import { Row, Col } from "react-bootstrap";
import './AboutPage.css';
import missionIcon from '../../assets/mission.png';
import visionIcon from '../../assets/eye.png';
import valuesIcon from '../../assets/diamond.png';


function AboutPage() {
  return (
    <>
    <Row className="d-flex justify-content-center align-items-center" style={{backgroundImage:"url(/static/media/design.5402be93.jpg)"}}>
    <Col className="h-50 pb-5 pt-5 mt-5 mb-5">
      <h1 style={{color: "#F28F3B"}}>ABOUT US</h1>
      <p className="column">
      We believe that access to food is a basic human right, not a privilege. No one should go hungry or face barriers to accessing food.
      </p>
    </Col>
  </Row>
  <Row>
    <Col className="col-xs-12 col-sm-6 col-lg-4">
			<div className="box text-center">
				<div className="icon">
					<div className="image"><img alt=" " src={missionIcon}/></div>
					<div className="info">
						<h3 className="title">Mission</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">
							<a href="/" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="space"></div>
			</div> 
		</Col>
    <Col className="col-xs-12 col-sm-6 col-lg-4">
			<div className="box text-center">
				<div className="icon">
					<div className="image"><img alt=" " src={visionIcon}/></div>
					<div className="info">
						<h3 className="title">Vision</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">
							<a href="/" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="space"></div>
			</div> 
		</Col>
    <Col className="col-xs-12 col-sm-6 col-lg-4">
			<div className="box text-center">
				<div className="icon">
					<div className="image"><img alt=" " src={valuesIcon}/></div>
					<div className="info">
						<h3 className="title">Values</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet neque semper.
						</p>
						<div className="more">
							<a href="/" title="Title Link">
								Read More <i className="fa fa-angle-double-right"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="space"></div>
			</div> 
		</Col>
  </Row>
  </>
  );
}

export default AboutPage;
