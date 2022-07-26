import React, { StrictMode, useState } from "react";
import { Eth as ether } from "../components/InfoSectionCrypto/Data";
import EXGNavbar from "../components/ExchangeBar";
import Sidebar from "../components/ExchangeSideBar";
import InfoSection from "../components/InfoSectionCrypto";
import ChartData from "../components/Chart";

const Eth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log("1");
  return (
    <StrictMode>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <EXGNavbar toggle={toggle} />
      <InfoSection {...ether} />
      <ChartData coin={"ETHrate"} />
    </StrictMode>
  );
};

export default Eth;
