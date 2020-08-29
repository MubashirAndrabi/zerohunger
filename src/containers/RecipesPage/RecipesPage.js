import React, { Component } from "react";
import { TwoCardCarousel } from "../../components";
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
    ],
  };
  render() {
    return (
      <>
        <TwoCardCarousel />
        <Row className="d-flex">
          {this.state.recipes.map((item) => {
            return (
              <Col key={uuidv4()} xs="auto">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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
