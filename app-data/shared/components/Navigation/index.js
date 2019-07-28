import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './scss/navigation.scss';

const Navigation = () => {
  const [isOpen, toggle] = useState(false);
  const [isTop, isPageTop] = useState(true);
  
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const currentIsTop = window.scrollY < 100;
      if (currentIsTop !== isTop) {
        isPageTop(currentIsTop);
      }
    }, []);
  });

  return (
   /* <div className="border mb-4 p-2">
      <Container>
        <ul className="d-flex m-0 p-0 list-unstyled justify-content-start">
          <LI>
            <Link href="/">
              <a>Home</a>
            </Link>
          </LI>
          <LI>
            <Link href="/sub-page">
              <a>Subpage</a>
            </Link>
          </LI>
        </ul>
      </Container>
    </div>*/
      <Navbar className={isTop ? "background fixed-top p-0" : "scroll_background fixed-top p-0"}  expand="md">
        <Container>
        <NavbarBrand href="/">
          <img src="/static/images/white.png" alt="Logo White" className={isTop ? "show " : "hide"}/>
          <img src="/static/images/black.png" alt="Logo Black" className={isTop ? "hide " : "show"}/>
        </NavbarBrand>
          <NavbarToggler onClick={()=> toggle(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link">O NÁS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link">SLUŽBY</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link">LICENCIE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link">KARIÉRA</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link">KONTAKT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
  );
};

export default Navigation;
