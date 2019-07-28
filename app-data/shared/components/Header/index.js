import React from 'react';
import { Container } from 'reactstrap';
import './scss/header.scss'

const Header = () => (
  <div className="header">
    <Container fluid>
      <Container>
        <div className="text_holder">
          <h1>SYMBOL BEZPEČNOSTI</h1>
        </div>
      </Container>
    </Container>
  </div>
);

export default Header;
