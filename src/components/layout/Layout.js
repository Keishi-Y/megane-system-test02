import React from "react";
import { Header } from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import { Links } from "./Links";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container className="mb-5">
        <Row>
          <Col
            xs={2}
            style={{
              minWidth: "250px",
              borderRight: "1px solid #ddd",
            }}
          >
            <Links />
          </Col>
          <Col xs={8}>{children}</Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </>
  );
};
