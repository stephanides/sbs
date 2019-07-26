import React from 'react';
import Navigation from '../Navigation';
import { Container } from 'reactstrap';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <Container>
      { children }
    </Container>
  </div>
);

export default Layout;
