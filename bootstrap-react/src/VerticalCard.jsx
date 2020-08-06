import React from "react";
import "./styles.css";

import { Card, CardText, CardBody, CardTitle, CardLink } from "reactstrap";

export default function HorizontalCard() {
  return (
    <div className="">
      <Card className="verticalCard">
        <CardBody>
          <CardTitle className="mb-5 mt-2">Lorem Ipsum</CardTitle>
          <CardText className="mb-5 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            rhoncus ornare consectetur. Sed vestibulum dapibus tellus sed
            vulputate. Cras aliquet lobortis justo, id imperdiet est volutpat
            id. Aliquam leo eros, lobortis eu auctor ac, ultricies quis urna.
            Phasellus pulvinar sem in mauris pellentesque dictum ut at nisi.
          </CardText>
          <CardLink className="btn btn-primary mt-5 mb-2" href="#">
            BUTTON 1
          </CardLink>
          <CardLink className="btn btn-light mt-5 mb-2" href="#">
            BUTTON 2
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
}
