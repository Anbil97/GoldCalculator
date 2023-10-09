import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CalculatorWrapper = ({ children }) => {
  return (
    <Container className="my-5">
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default CalculatorWrapper;
