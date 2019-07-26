import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';
import styled from 'styled-components';

const Navigation = () => (
  <div className="border mb-4 p-2">
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
  </div>
);

const LI = styled.li`
  margin-right: .5rem;
`;

export default Navigation;
