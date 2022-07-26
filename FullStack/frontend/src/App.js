import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import BTC from "./pages/bitcoin";
import Eth from "./pages/ether";
import Ada from "./pages/ada";
import Polkadot from "./pages/polkadot";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bitcoin" element={<BTC />} />
        <Route path="/eth" element={<Eth />} />
        <Route path="/ada" element={<Ada />} />
        <Route path="/polkadot" element={<Polkadot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
