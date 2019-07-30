/* eslint-disable max-len */
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './scss/services.scss';

const Services = () => {
  const [isOpen, toggle] = useState([false, false, false, false, false, false]);

  const handleToggle = (i) => {
    const modifiedIsOpen = [...isOpen];

    for (let j = 0; j < modifiedIsOpen.length; j += 1) {
      if (j === i) {
        modifiedIsOpen[j] = true;
      } else {
        modifiedIsOpen[j] = false;
      }
    }
    toggle(modifiedIsOpen);
  };

  return (
    <div className="services pb-4" id="services">
      <Container fluid>
        <Container>
          <Row>
            <Col lg="6" sm="12" className="pt-4 services_holder" onClick={() => handleToggle(0)}>
              <div
                className={
                  isOpen[0]
                    ? 'service_content d-flex align-items-center flex-column justify-content-center'
                    : 'service_content d-flex align-items-center flex-column justify-content-center'
                }
              >
                <h2 className="text-center">
                  FYZICKÁ
                  <br />
                  OCHRANA
                  <br />
                  OBJEKTOV
                </h2>
                <p>Fyzická prítomnosť bezpečnostnej služby výrazne znižuje riziko poškodenia alebo odcudzenia majetku. Vieme zabezpečiť malé, stredné a veľké objekty, haly, výrobné a prevádzkové priestory. Každú ponuku posudzujeme individuálne a snažíme sa vždy nájsť vhodné riešenie pre klienta.</p>
              </div>
              <div
                className={
                  isOpen[0]
                    ? 'service d-flex align-items-center justify-content-center hide'
                    : 'service d-flex align-items-center justify-content-center show'
                }
              >
                <h2 className="text-center">
                  FYZICKÁ
                  <br />
                  OCHRANA
                  <br />
                  OBJEKTOV
                </h2>
              </div>
            </Col>
            <Col lg="6" sm="12" className="pt-4 services_holder" onClick = { () => handleToggle(1)}>
              <div
                className={
                  isOpen[1]
                    ? 'service_content d-flex align-items-center flex-column justify-content-center'
                    : 'service_content d-flex align-items-center flex-column justify-content-center'
                  }
              >
                <h2 className="text-center">
                  SLUŽBY
                  <br />
                  INFORMÁTORA
                </h2>
                <p>Zabezpečujeme tiež aj služby informátora/vrátnika. Je to vynikajúce riešenie pre firmy,  kde treba služby  kombinovať. Ak cez deň potrebujete informátora, ktorý poradí vaším návštevníkom a v noci objekt strážiť,  je táto kombinácia vhodná a zároveň aj ekonomicky výhodná.</p>
              </div>
              <div
                className={
                  isOpen[1]
                    ? 'service d-flex align-items-center justify-content-center hide'
                    : 'service d-flex align-items-center justify-content-center show'
                }
              >
                <h2 className="text-center">
                  SLUŽBY
                  <br />
                  INFORMÁTORA
                </h2>
              </div>
            </Col>
            <Col lg="6" sm="12" className="pt-4 services_holder" onClick={() => handleToggle(2)}>
              <div className={
                isOpen[2]
                  ? 'service_content d-flex align-items-center flex-column justify-content-center'
                  : 'service_content d-flex align-items-center flex-column justify-content-center'
                }
              >
                <h2 className="text-center">
                  MOBILNÁ
                  <br />
                  PATROLA
                </h2>
                <p>Jej zmyslom je zaviesť nepravidelný, ale riadený systém  kontrol prevádzaných na stráženom objekte, minimalizovať riziká, chrániť život, zdravie a majetok osôb, najmä v oblastiach,  kde väčšinou z dôvodu rýchlej výstavby narastá kriminalita a  kde ochrana od štátnych zložiek nie je dostačujúca. </p>
              </div>
              <div className={isOpen[2] ? " service d-flex align-items-center justify-content-center flex-column hide " : "service d-flex align-items-center flex-column justify-content-center show"}>
                <h2 className="text-center">MOBILNÁ<br/>PATROLA</h2>
                <h3 className="text-center">(už čoskoro)</h3>
              </div>
            </Col>
            <Col lg="6" sm="12" className="pt-4 services_holder" onClick = { () => handleToggle(3)}>
              <div className={ isOpen[3] ? "service_content d-flex align-items-center flex-column justify-content-center " : "service_content d-flex align-items-center flex-column justify-content-center "} >
                <h2 className="text-center">OSOBNÁ<br/>OCHRANA</h2>
                <p>Preberieme zodpovednosť za vašu bezpečnosť a za to, aby sa vám nič nestalo počas rôznych príležitostí. Môže ísť o ochranu vašej osoby, vašej rodiny (a podobne) počas pracovnej cesty, obchodných stretnutí, ochranu počas bežných dní, ochranu a sprevádzanie pri vyšších finančných transakciách, ochranu pri verejných vystúpeniach alebo o ochranu v rôznych krízových situáciách, keď máte obavy o vlastnú bezpečnosť.  Tento typ služby u nás vykonávajú len profesionálne zaškolení a certifikovaní zamestnanci,  ktorí majú dlhoročné skúsenosti nielen v bezpečnostnom segmente, ale s konkrétnym druhom služby.  </p>
              </div>
              <div className={isOpen[3] ? "service d-flex align-items-center justify-content-center hide" : "service d-flex align-items-center justify-content-center show"}>
                <h2 className="text-center">OSOBNÁ<br/>OCHRANA</h2>
              </div>
            </Col>
            <Col lg="6" sm="12" className="pt-4 services_holder" onClick = { () => handleToggle(4)}>
              <div className={ isOpen[4] ? "service_content d-flex align-items-center flex-column justify-content-center " : "service_content d-flex align-items-center flex-column justify-content-center "} >
                <h2 className="text-center">ZABEZPEČOVACIE<br/>SYSTÉMY</h2>
                <p>V prípade záujmu vám vieme zabezpečiť aj elektronické zabezpečovacie systémy.  </p>
              </div>
              <div className={isOpen[4] ? " service d-flex align-items-center justify-content-center hide" : "service d-flex align-items-center justify-content-center show"}>
                <h2 className="text-center">ZABEZPEČOVACIE<br/>SYSTÉMY</h2>
              </div>
            </Col>
            <Col lg="6" sm="12" className="pt-4 services_holder" onClick = { () => handleToggle(5)}>
              <div className={ isOpen[5] ? "service_content d-flex align-items-center flex-column justify-content-center " : "service_content d-flex align-items-center flex-column justify-content-center "} >
                <h2 className="text-center">BEZPEČNOSTNÝ<br/>VÝCVIK</h2>
                <p>V prípade záujmu vieme zabezpečiť aj výcvik jednotlivca v oblastiach osobnej ochrany,  osobnej sebaobrany alebo poskytnúť komplexný strelecký výcvik.  </p>
              </div>
              <div className={isOpen[5] ? " service d-flex align-items-center justify-content-center hide" : "service d-flex align-items-center justify-content-center show"}>
                <h2 className="text-center">BEZPEČNOSTNÝ<br/>VÝCVIK</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Services;
