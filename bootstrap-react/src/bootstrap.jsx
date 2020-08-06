import React from "react";
import "./styles.css";

import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VerticalCard";

import { Container, Row, Col } from "reactstrap";

export default function App() {
  return (
    <div className="App">
      <Container className="container">
        <Row>
          <Col xs={12} md={6}>
            <VerticalCard />
          </Col>
          <Col xs={12} md={6}>
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
