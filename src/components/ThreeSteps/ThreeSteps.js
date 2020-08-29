import React from "react";

import { Card } from "react-bootstrap";
import "./ThreeSteps.css";

function ThreeSteps(props) {
  return (
    <>
      <div className="row">
        <div className="column" style={{ padding: "20px" }}>
          <Card className="grow" style={{ width: "19rem", border: "none" }}>
            <Card.Img
              variant="top"
              src="https://images.theconversation.com/files/282104/original/file-20190701-105182-1q7a7ji.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
            />
            <Card.Body style={{ padding: "0.25rem" }}>
              <Card.Text style={{ color: "#248404" }}>
                Now you don't have to worry about returning empty handed. You
                can easily check whether your nearest food bank has enough
                stock.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="column" style={{ padding: "20px" }}>
          <Card className="grow" style={{ width: "19rem", border: "none" }}>
            <Card.Img
              variant="top"
              src="https://pyxis.nymag.com/v1/imgs/2af/72e/65fc13d864b5552988b9393c0f5ea5fdb6-deliveries-lede.rsquare.w1200.jpg"
            />
            <Card.Body style={{ padding: "0.25rem" }}>
              <Card.Text style={{ color: "#248404" }}>
                You don't need to stand in long queues, get you're groceries
                dilevered at your doorstep.{" "}
                <a href="#!">(*Click here for more information)</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="column" style={{ padding: "20px" }}>
          <Card className="grow" style={{ width: "19rem", border: "none" }}>
            <Card.Img
              variant="top"
              src="https://pyxis.nymag.com/v1/imgs/0f1/91c/4db3ae1e12429fed55d631fbc1c2b34fce-05-whole-foods.rsquare.w1200.jpg"
            />
            <Card.Body style={{ padding: "0.25rem" }}>
              <Card.Text style={{ color: "#248404" }}>
                Check our weekly newsletters or blogs to keep yourself updated
                about cooking nutritious food with the least of ingredients.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ThreeSteps;
