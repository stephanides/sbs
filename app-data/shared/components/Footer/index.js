import React, {useState} from 'react';
import { Container, Row, Col,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './scss/footer.scss'

const Footer = () => {
  
  const [isOpen, toggle] = useState(false);
    return(
    <div className="footer" id="footer">
      <Container fluid>
        <Container>
          <h2>KONTAKT</h2>
          <Row className="mt-4">
            <Col md="6" xs="12" className="mt-4 pr-4">
              <p className= "pr-4">V prípade záujmu o vypracovanie cenovej ponuky alebo akýchkoľvek otázok nás prosím kontaktujte e-mailom alebo telefonicky.</p>
              <p>T.S.G. - Security s.r.o.<br/>Račianska 88 B<br/>Bratislava - mestská časť<br/>Nové Mesto 831 02<br/>IČO: 52 370 682</p>
            </Col>
            <Col md="3" xs="12" className="mt-4 ">
              <p>Konateľ<br/>sbs@tsgsecurity.sk<br/>+421 915 79 44 84</p>
              <p>Riaditeľ úseku fyzickej bezpečnosti<br/>kollner@tsgsecurity.sk<br/>+421 910 95 54 43</p>
            </Col>
            <Col md="3" xs="12" className="mt-4">
            <img src="/static/images/licencia.jpg" alt="Licencia" onClick={() => toggle(!isOpen)} /> 
            </Col>
          </Row>
      </Container>
    </Container>
      <Modal isOpen={isOpen} toggle={() => toggle(!isOpen)} >
        <ModalHeader toggle={() => toggle(!isOpen)}>Licencia</ModalHeader>
        <ModalBody>
         <img src="/static/images/licencia.jpg" alt="Licencia"/>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggle(!isOpen)}>Zavrieť</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
}

export default Footer;
