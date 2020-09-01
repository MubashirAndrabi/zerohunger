import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
function VolunteerPage() {
  return (
    <>
      <Row className="d-flex justify-content-center align-items-center" style={{backgroundImage:"url(/static/media/design.5402be93.jpg)"}}>
        <Col className="h-50 pb-5 pt-5 mt-5 mb-5">
          <h1 style={{color: "#F28F3B"}}>Volunteer Opportunities</h1>
          <p className="w-50">
            Thank you for your interest in volunteering with us. Due to the Covid19 pandemic, the number of volunteer
            positions has been reduced significantly. We appreciate your
            understanding. When additional opportunities are available, Please contact us throught our email address.
          </p>
        </Col>
      </Row>
      <Row className="parallax flex-row h-100 pt-5 pb-5"  style={{color:'#505050'}}>
        <Col md={4} sm={6} lg={3} className="mb-5">
          <Card >
            <Card.Img
              variant="top"
              src={
                "https://image.freepik.com/free-photo/woman-customer-receiving-fresh-food-set-bag-from-food-delivery-service-man-with-protection-face-mask-red-uniform-door-home-express-delivery-quarantine-virus-outbreak-food-delivery-concept_33829-337.jpg"
              }
            />
            <Card.Body>
              <Card.Title>Delivery Assistants</Card.Title>
              <Card.Text>
                you will help clients who experience mobility barriers that
                hinder or prevent them from accessing their neighbourhood food
                bank.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} lg={3}className="mb-5">
          <Card>
            <Card.Img
              variant="top"
              src={
                "https://viemagazine.com/wp-content/uploads/2020/04/vie-magazine-covid-19-brands-going-above-and-beyond-hero.jpg"
              }
            />
            <Card.Body>
              <Card.Title>Community Support</Card.Title>
              <Card.Text>
                you will help clients who experience mobility barriers that
                hinder or prevent them from accessing their neighbourhood food
                bank.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} lg={3}className="mb-5">
          <Card>
            <Card.Img
              variant="top"
              src={
                "https://thirdforcenews.org.uk/images/uploads/articles/866153/foodbank-warehouse-tin-sorting-2_web-e1512736203945.jpg"
              }
            />
            <Card.Body>
              <Card.Title>Sorting Food</Card.Title>
              <Card.Text>
                you will help to categorize and box donated food, and check the
                quality of product food with a high degree of excellence.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default VolunteerPage;
