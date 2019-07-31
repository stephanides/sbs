import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import dynamic from 'next/dynamic';

import Navigation from '../Navigation';
import Header from '../Header';

const DynamicAbout = dynamic(() => import('../About'));
const DynamicUs = dynamic(() => import('../Us'));
const DynamicServices = dynamic(() => import('../Services'));
const DynamicCareer = dynamic(() => import('../Career'));
const DynamicFooter = dynamic(() => import('../Footer'));

const Layout = () => (
  <div>
    <Navigation />
    <Header />
    <DynamicAbout />
    <DynamicUs />
    <DynamicServices />
    <DynamicCareer />
    <DynamicFooter />
  </div>
);

export default Layout;
