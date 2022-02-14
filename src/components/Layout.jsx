import { useState } from "react";
import Home from "../img/nav-img1.svg";
import Academic from "../img/nav-img2.svg";
import Work from "../img/nav-img3.svg";
import Objectives from "../img/nav-img4.svg";
import Presentation from "./Presentation";
import Experience from "./Experience";
import Skills from "./Skills";
import School from "./School";

const Layout = () => {
  const [ubicacion, setUbicacion] = useState("Presentation");

  const cambioUbicacion = (lugar) => {
    setUbicacion(lugar);
  };

  return (
    <div className="bg-[#012246] min-h-screen w-full">
      {/**Barra de Navegación */}
      <nav className="bg-[#6CAEF5] h-14 rounded-b-2xl flex justify-center gap-10">
        <div className="pt-3">
          <img
            src={Home}
            alt="Home"
            className={`w-8 cursor-pointer ${
              ubicacion === "Presentation"
                ? "bg-[#007AFF] rounded-[100%] "
                : "null"
            }`}
            onClick={() => cambioUbicacion("Presentation")}
          />
        </div>
        <div className="pt-3">
          <img
            src={Academic}
            alt="Academic"
            className={`w-8 cursor-pointer ${
              ubicacion === "School" ? "bg-[#007AFF] rounded-[100%] " : "null"
            }`}
            onClick={() => cambioUbicacion("School")}
          />
        </div>
        <div className="pt-3">
          <img
            src={Work}
            alt="Work"
            className={`w-8 cursor-pointer ${
              ubicacion === "Experience"
                ? "bg-[#007AFF] rounded-[100%] "
                : "null"
            }`}
            onClick={() => cambioUbicacion("Experience")}
          />
        </div>
        <div className="pt-3">
          <img
            src={Objectives}
            alt="Objectives"
            className={`w-8 cursor-pointer ${
              ubicacion === "Skills" ? "bg-[#007AFF] rounded-[100%] " : "null"
            }`}
            onClick={() => cambioUbicacion("Skills")}
          />
        </div>
      </nav>

      <div>
        {ubicacion === "School" ? (
          <School />
        ) : ubicacion === "Experience" ? (
          <Experience />
        ) : ubicacion === "Skills" ? (
          <Skills />
        ) : (
          <Presentation />
        )}
      </div>
    </div>
  );
};

export default Layout;
