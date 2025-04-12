import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import FooterSection from "../FooterSection/FooterSection";
import { Outlet } from "react-router-dom";

function Shared() {
  return (
    <div>
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </div>
  );
}

export default Shared;
