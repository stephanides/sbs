import React, { useState } from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import dynamic from 'next/dynamic';
import './scss/footer.scss';

const DynamicModal = dynamic(() => import('./components/Modal'));

const Footer = () => {
  const [isOpen, toggle] = useState(false);

  return (
    <div className="footer" id="footer">
      <Container fluid>
        <Container>
          <h2>KONTAKT</h2>
          <Row className="mt-4">
            <Col md="6" xs="12" className="mt-4 pr-4">
              <p className="pr-4">V prípade záujmu o vypracovanie cenovej ponuky alebo akýchkoľvek otázok nás prosím kontaktujte e-mailom alebo telefonicky.</p>
              <p>
                T.S.G. - Security s.r.o.
                <br />
                Račianska 88 B
                <br />
                Bratislava - mestská časť
                <br />
                Nové Mesto 831 02
                <br />
                IČO: 52 370 682
              </p>
            </Col>
            <Col md="3" xs="12" className="mt-4 ">
              <p>
                Konateľ
                <br />
                sbs@tsgsecurity.sk
                <br />
                +421 915 79 44 84
              </p>
              <p>
                Riaditeľ úseku fyzickej bezpečnosti
                <br />
                kollner@tsgsecurity.sk
                <br />
                +421 910 95 54 43
              </p>
            </Col>
            <Col md="3" xs="12" className="mt-4">
              <button type="button" className="bg-transparent border-0" onClick={() => toggle(!isOpen)}>
                <img src="/static/images/licencia-min.jpg" alt="Licencia" />
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
      <DynamicModal isOpen={isOpen} toggle={toggle} />
    </div>
  );
};
// <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />

export default Footer;
