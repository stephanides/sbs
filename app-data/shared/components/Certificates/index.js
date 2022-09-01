/* eslint-disable max-len */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./scss/about.scss";

const Certificates = () => (
  <div className="certificates">
    <Container fluid>
      <Container>
        <div className="text_holder">
          <h4 className="text-center mb-0">Certifikáty</h4>
        </div>
        <Row>
          <Col md="4" sm="6" xs="12" className="mb-4  p-4">
            <a href="/static/images/1.pdf" target="_blank">
              <img src="/static/images/1.jpg" alt="certificate" />
            </a>
          </Col>
          <Col md="4" sm="6" xs="12" className="mb-4  p-4">
            <a href="/static/images/2.pdf" target="_blank">
              <img src="/static/images/2.jpg" alt="certificate" />
            </a>
          </Col>
          <Col md="4" sm="6" xs="12" className="mb-4  p-4">
            <a href="/static/images/3.pdf" target="_blank">
              <img src="/static/images/3.jpg" alt="certificate" />
            </a>
          </Col>
          <Col md="4" sm="6" xs="12" className="mb-4  p-4">
            <a href="/static/images/4.pdf" target="_blank">
              <img src="/static/images/4.jpg" alt="certificate" />
            </a>
          </Col>
          <Col md="4" sm="6" xs="12" className="mb-4  p-4">
            <a href="/static/images/5.pdf" target="_blank">
              <img src="/static/images/5.jpg" alt="certificate" />
            </a>
          </Col>
          <Col md="4" sm="6" xs="12" className="mb-4 p-4">
            <a href="/static/images/6.pdf" target="_blank">
              <img src="/static/images/6.jpg" alt="certificate" />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
);

export default Certificates;
