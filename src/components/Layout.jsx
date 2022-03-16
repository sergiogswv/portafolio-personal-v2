import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#012246] min-h-screen w-full">
      {/* Barra de Navegación  */}
      <Nav></Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
