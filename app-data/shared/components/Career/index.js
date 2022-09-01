/* eslint-disable max-len */
import React from "react";
import { Container } from "reactstrap";
import "./scss/career.scss";

const Career = () => (
  <div className="career mt-4" id="career">
    <Container fluid>
      <Container>
        <div className="text_holder">
          <h4 className="text-center mb-0">KARIÉRA</h4>
          <h6 className="text-center">
            V prípade záujmu o prácu v našej spoločnosti zašlite e-mail so
            životopisom a fotografiou na
            <a href="mailto:sbs@tsgsecurity.sk"> sbs@tsgsecurity.sk</a>
          </h6>
          <p className="text-center">
            Upozornenie:
            <br />
            Zaslaním žiadosti záujemca o zamestnanie vyjadruje svoj súhlas
            spoločnosti T.S.G. - Security s.r.o. so spracovaním osobných údajov
            pre účely výberového konania v zmysle zák.č. 122/2013 Z.z. o ochrane
            osobných údajov v platnom znení.
          </p>
        </div>
      </Container>
    </Container>
  </div>
);

export default Career;
