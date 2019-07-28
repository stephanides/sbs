import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './scss/us.scss'

const Us = () => (
  <div className="us">
    <Container fluid>
      <Container>
        <div className="us_holder">
          <Row>
            <Col sm="3" className = "us_item">
              <img src="/static/images/icons/icon_profesionalita.png" alt="Profesionalita" />
              <h4 className="text-center">PROFESIONALITA</h4>
              <p>Zamestnávame najmä mladých a vycvičených ľudí, ktorí sú pripravení na rôzne udalosti. Okrem zákonných podmienok sú zamestnanci pravidelne odborne školení.</p>
            </Col>
            <Col sm="3" className = "us_item">
              <img src="/static/images/icons/icon_stabilita.png" alt="Stabilizacia" />
              <h4 className="text-center">STABILIZÁCIA</h4>
              <p>Základom stabilizácie zamestnancov spoločnosti je vštepovanie uvedomovania si významu a dôležitosti svojej profesie a funkcie.</p>
            </Col>
            <Col sm="3" className = "us_item">
              <img src="/static/images/icons/icon_kontrola.png" alt="Kontrola" />
              <h4 className="text-center">KONTROLA</h4>
              <p>U každého uchádzača o prácu je skúmaný motív záujmu o toto zamestnanie a takisto jeho doterajšie pracovné referencie. Ich umiestnenie je tiež záležitosťou výberu najvhodnejšieho strážnika na daný objekt.</p>
            </Col>
            <Col sm="3" className = "us_item">
              <img src="/static/images/icons/icon_doslednost.png" alt="Dôslednosť" />
              <h4 className="text-center">DÔSLEDNOSŤ</h4>
              <p>Garantujeme pravidelné kontroly našich zamestnancov bezpečnostným manažérom a takisto 24/7 hotline na riešenie akejkoľvek požiadavky klienta. Plná starostlivosť o váš  objekt bude našou  prioritou po celý čas. </p>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  </div>
);

export default Us;
