import React from "react";
import "./styles.css";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default function HorizontalCard() {
  return (
    <div className="">
      <Card className="cardHorizontal">
        <div className="card-horizontal">
          <div className="img-square-wrapper">
            <CardImg
              top
              width="100%"
              src="http://lorempixel.com/100/100"
              alt="Card image cap"
            />
          </div>
          <CardBody>
            <CardTitle>Lorem Ipsum</CardTitle>
            <CardText>
              Some quick example text to build on the card title.
            </CardText>
          </CardBody>
        </div>
      </Card>
    </div>
  );
}
