import React, { useState } from "react";
import { Bitcoin } from "../components/InfoSectionCrypto/Data";
import EXGNavbar from "../components/ExchangeBar";
import Sidebar from "../components/ExchangeSideBar";
import InfoSection from "../components/InfoSectionCrypto";
import ChartData from "../components/Chart";
function BTC() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <EXGNavbar toggle={toggle} />
      <InfoSection {...Bitcoin} />
      <ChartData coin={"BTCrate"} />
    </>
  );
}

export default BTC;
