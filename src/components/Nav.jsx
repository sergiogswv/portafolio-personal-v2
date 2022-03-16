import Home from "../img/nav-img1.svg";
import Academic from "../img/nav-img2.svg";
import Work from "../img/nav-img3.svg";
import Objectives from "../img/nav-img4.svg";
import Extras from "../img/plus.svg";

import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const locacion = useLocation();

  const cambiarUbicacion = (ubicacion) => {
    navigate(`/${ubicacion}`);
  };
  return (
    <nav className="bg-[#6CAEF5] h-14 rounded-b-2xl flex justify-center gap-10">
      <div className="pt-3">
        <img
          src={Home}
          alt="Home"
          className={`w-8 cursor-pointer ${
            locacion.pathname === "/" && "bg-[#007AFF] rounded-3xl"
          }`}
          onClick={() => cambiarUbicacion("")}
        />
      </div>
      <div className="pt-3">
        <img
          src={Academic}
          alt="Academic"
          className={`w-8 cursor-pointer ${
            locacion.pathname === "/conocimientos" && "bg-[#007AFF] rounded-3xl"
          }`}
          onClick={() => cambiarUbicacion("conocimientos")}
        />
      </div>
      <div className="pt-3">
        <img
          src={Work}
          alt="Work"
          className={`w-8 cursor-pointer ${
            locacion.pathname === "/experiencia" && "bg-[#007AFF] rounded-3xl"
          }`}
          onClick={() => cambiarUbicacion("experiencia")}
        />
      </div>
      <div className="pt-3">
        <img
          src={Objectives}
          alt="Objectives"
          className={`w-8 cursor-pointer ${
            locacion.pathname === "/aptitudes" && "bg-[#007AFF] rounded-3xl"
          }`}
          onClick={() => cambiarUbicacion("aptitudes")}
        />
      </div>
      <div className="pt-3">
        <img
          src={Extras}
          alt="Extras"
          className={`w-8 cursor-pointer ${
            locacion.pathname === "/extras" && "bg-[#007AFF] rounded-3xl"
          }`}
          onClick={() => cambiarUbicacion("extras")}
        />
      </div>
    </nav>
  );
};

export default Nav;
