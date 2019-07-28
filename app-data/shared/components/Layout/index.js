import React from 'react';
import Navigation from '../Navigation';
import Header from '../Header';
import About from '../About';
import Us from '../Us';
import Services from '../Services';
import { Container } from 'reactstrap';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <Header />
    <About />
    <Us />
    <Services />
    <Container>
      { children }
    </Container>
  </div>
);

export default Layout;
