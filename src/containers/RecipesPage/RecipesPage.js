import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Row, Col, Card, Button } from "react-bootstrap";

class RecipesPage extends Component {
  state = {
    recipes: [
      {
        name: "Grilled Buttermilk Chicken",
        description:
          "I created this recipe years ago after one of our farmers market customers, a chef, shared the idea of marinating",
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2019/03/Grilled-Buttermilk-Chicken_EXPS_BFBZ19_193422_B01_16_4b-696x696.jpg",
      },
      {
        name: "Shredded Kale Salad",
        description:
          "This salad is a simple and delicious way to eat your superfoods! It gets even better in the fridge",
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2018/01/Shredded-Kale-and-Brussels-Sprouts-Salad_EXPS_SDDJ18_200354_B08_09_12b-696x696.jpg",
      },
      {
        name: "Modern Tuna Casserole",
        description:
          "the massive amounts of fat and salt in the traditional recipe were a turnoff healthwise",
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2018/12/Modern-Tuna-Casserole_EXPS_THFM19_228112_B09_27_9b-696x696.jpg",
      },
      {
        name: "Lemony Zucchini Ribbons",
        description:
          "Fresh zucchini gets a shave and a drizzle of lemony goodness in this fab salad.",
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps194425_SD163617D02_04_4b-696x696.jpg",
      },
      {
        name: "Baked sweet potatoes",
        description:
          "Baked sweet potatoes aren't just for dinner anymore. Top them with breakfast favorites to power up your morning",
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2018/01/Breakfast-Sweet-Potatoes_EXPS_SDON17_205477_C06_30_6b-696x696.jpg",
      },
      {
        name: "Tomato & Avocado Sandwiches",
        description:
          "This is a tasty, quick and healthy lunch I could eat for every meal. At my house",
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2018/01/Tomato-Avocado-Sandwiches_exps144054_SD143205A01_31_4bC_RMS-696x696.jpg",
      },
      {
        name: "Beefy Cabbage Bean Stew",
        description:
          "While on one of our small group quilting retreats, one of my friends made this wonderful recipe packed with cheap",
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2018/01/Beefy-Cabbage-Bean-Stew_EXPS_SSMZ20_109535_B10_25_1b-1-696x696.jpg",
      },
      {
        name: "Grilled Lemon-Dill Shrimp",
        description:
          "This grilled shrimp is one of my go-to recipes when I stare at the freezer and draw a blank",
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps171034_SD153320C12_05_9b-696x696.jpg",
      },
    ],
  };
  render() {
    return (
      <>
        <Row
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundImage: "url(/static/media/design.5402be93.jpg)" }}
        >
          <Col className="h-50 pb-5 pt-5 mt-5 mb-5">
            <h1 className="w-75 mb-3" style={{color: "#F28F3B"}}>
              Inexpensive Ingredients for Healthy Meals
            </h1>
            <p className="w-50">
              Dealing with a tight budget? You can still enjoy tasty, healthy
              dishes! Here are versatile and inexpensive ingredients that will
              keep your grocery bill low while allowing you to create a variety
              of recipes that are packed with flavour!
            </p>
          </Col>
        </Row>
        <Row className="p-0">
          {this.state.recipes.map((item) => {
            return (
              <Col key={uuidv4()} md={4} sm={6} lg={3} className="mb-5">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="outline-success" >Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
export default RecipesPage;
