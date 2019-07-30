import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import './scss/navigation.scss';

const Navigation = () => {
  const [isOpen, toggle] = useState(false);
  const [isTop, isPageTop] = useState(true);

  useEffect(() => {
    const checkTop = () => {
      const currentIsTop = window.scrollY < 100;
      if (currentIsTop !== isTop) {
        isPageTop(currentIsTop);
      }
    };

    checkTop();
    document.addEventListener('scroll', () => {
      checkTop();
    }, []);
  });

  return (
    <Navbar className={isTop ? 'background fixed-top p-0' : 'scroll_background fixed-top p-0'} expand="md">
      <Container className="menu_holder">
        <NavbarBrand href="/">
          <img src="/static/images/white.png" alt="Logo White" className={isTop ? 'show' : 'hide'} />
          <img src="/static/images/black.png" alt="Logo Black" className={isTop ? 'hide' : 'show'} />
        </NavbarBrand>
        <NavbarToggler onClick={() => toggle(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <AnchorLink href="#about" className="nav-link" onClick={() => toggle(!isOpen)}>O NÁS</AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#services" className="nav-link" onClick={() => toggle(!isOpen)}>SLUŽBY</AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#footer" className="nav-link" onClick={() => toggle(!isOpen)}>LICENCIE</AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#career" className="nav-link" onClick={() => toggle(!isOpen)}>KARIÉRA</AnchorLink>
            </NavItem>
            <NavItem>
              <AnchorLink href="#footer" className="nav-link" onClick={() => toggle(!isOpen)}>KONTAKT</AnchorLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
