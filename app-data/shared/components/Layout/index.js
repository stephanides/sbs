import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigation from '../Navigation';
import Header from '../Header';
import About from '../About';
import Us from '../Us';
import Services from '../Services';
import Career from '../Career';
import Footer from '../Footer';

const Layout = () => (
  <div>
    <Navigation />
    <Header />
    <About />
    <Us />
    <Services />
    <Career />
    <Footer />
  </div>
);

export default Layout;
