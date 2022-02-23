import { useState } from "react";
import Presentation from "./Presentation";
import Experience from "./Experience";
import Skills from "./Skills";
import School from "./School";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#012246] min-h-screen w-full">
      {/* Barra de Navegación  */}
      <Nav></Nav>
      {children}
    </div>
  );
};

export default Layout;
