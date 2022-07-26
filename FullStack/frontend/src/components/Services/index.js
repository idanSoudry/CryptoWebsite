import React from "react";
import imgSvg5 from "../../images/svg-5.svg";
import imgSvg9 from "../../images/svg-9.svg";
import imgSvg8 from "../../images/svg-8.svg";
import imgSvg6 from "../../images/svg-6.svg";
import { Button2 } from "../ButtonElement";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  Servicesp,
  ServicesIcon,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="crypto">
      <ServicesH1>Cryptocurrencies</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={imgSvg6} />
          <ServicesH2>Bitcoin</ServicesH2>
          <Servicesp></Servicesp>
          <Button2
            bigspace={true}
            smooth={true}
            spy={true}
            duration={500}
            primary={true}
            dark={true}
            to="bitcoin"
          >
            Learn more
          </Button2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={imgSvg5} />
          <ServicesH2>Eth</ServicesH2>
          <Servicesp></Servicesp>
          <Button2
            bigspace={true}
            smooth={true}
            spy={true}
            duration={500}
            primary={true}
            dark={true}
            to="eth"
          >
            Learn more
          </Button2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={imgSvg8} />
          <ServicesH2>Ada</ServicesH2>
          <Servicesp></Servicesp>
          <Button2
            bigspace={true}
            smooth={true}
            spy={true}
            duration={500}
            primary={true}
            dark={true}
            to="ada"
          >
            Learn more
          </Button2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={imgSvg9} />
          <ServicesH2>Polkadot</ServicesH2>
          <Servicesp></Servicesp>
          <Button2
            bigspace={true}
            smooth={true}
            spy={true}
            duration={500}
            primary={true}
            dark={true}
            to="polkadot"
          >
            Learn more
          </Button2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
