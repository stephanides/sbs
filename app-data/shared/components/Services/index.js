import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './scss/services.scss'

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

    console.log(modifiedIsOpen);
    toggle(modifiedIsOpen);
  };

  console.log(isOpen);
  console.log(isOpen[0]);

  return (
    <div className="services">
      <Container fluid>
        <Container>
            <Row>
              <Col sm="6" className="pt-4 services_holder" onClick = { () => handleToggle(0)}>
                <div className={ isOpen[0] ? "service d-flex align-items-center justify-content-center hide" : "service d-flex align-items-center justify-content-center show"} >
                  <h2 className="text-center">FYZICKÁ<br/>OCHRANA<br/>OBJEKTOV</h2>
                </div>
                <div className={ isOpen[0] ? "service_content d-flex align-items-center flex-column justify-content-center show" : "service d-flex align-items-center flex-column justify-content-center hide"} >
                  <h2 className="text-center">FYZICKÁ<br/>OCHRANA<br/>OBJEKTOV</h2>
                  <p>Fyzická prítomnosť bezpečnostnej služby výrazne znižuje riziko poškodenia alebo odcudzenia majetku. Vieme zabezpečiť malé, stredné a veľké objekty, haly, výrobné a prevádzkové priestory. Každú ponuku posudzujeme individuálne a snažíme sa vždy nájsť vhodné riešenie pre klienta.</p>
                </div>
              </Col>
              <Col sm="6" className="pt-4 services_holder" onClick = { () => handleToggle(1)}>
                <div  className={isOpen[1] ? " serviced-flex align-items-center justify-content-center hide" : "service d-flex align-items-center justify-content-center show"}>
                  <h2 className="text-center">SLUŽBY<br/>INFORMÁTORA</h2>
                </div>
              </Col>
              <Col sm="6" className="pt-4 services_holder"  onClick = { () => handleToggle(2)}>
                <div className={isOpen[2] ? " serviced-flex align-items-center justify-content-center flex-column hide " : "service d-flex align-items-center flex-column justify-content-center show"}>
                  <h2 className="text-center">MOBILNÁ<br/>PATROLA</h2>
                  <h3 className="text-center">(už čoskoro)</h3>
                </div>
              </Col>
              <Col sm="6" className="pt-4 services_holder" onClick = { () => handleToggle(3)}>
                <div className={isOpen[3] ? "service d-flex align-items-center justify-content-center hide" : "service d-flex align-items-center justify-content-center show"}>
                  <h2 className="text-center">OSOBNÁ<br/>OCHRANA</h2>
                </div>
              </Col>
              <Col sm="6" className="pt-4 services_holder" onClick = { () => handleToggle(4)}>
                <div className={isOpen[4] ? " service d-flex align-items-center justify-content-center hide" : "service d-flex align-items-center justify-content-center show"}>
                  <h2 className="text-center">ZABEZPEČOVACIE<br/>SYSTÉMY</h2>
                </div>
              </Col>
              <Col sm="6" className="pt-4 services_holder" onClick = { () => handleToggle(5)}>
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
