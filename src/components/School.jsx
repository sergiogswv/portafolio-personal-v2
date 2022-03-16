import Fondo from "../img/fondo.png";
/* Imagenes de proyectos */
import ProjectCLF from "../img/CLF-Devices.png";
import ProjectShop from "../img/bshop-devices.png";
import ProjectFigma from "../img/Figma.png";
import ProjectElhm from "../img/elhm-desktop.png";
import Apredizaje from "./Apredizaje";
/*helpers */
import { proyectos, conocimientos } from "../helpers";
import Conocimientos from "./Conocimientos";

const School = () => {
  return (
    <div className="font-['Quantico'] text-white grid grid-cols-1 md:w-full">
      {/**Fondo */}
      <div className="mb-16 md:w-full md:block">
        {/**Imagen */}
        <img
          src={Fondo}
          alt=""
          className="blur-[1px] absolute md:blur-[2px] md:h-[40%] md:w-full object-none lg:h-[60%]"
        />
        {/**Contenedor */}
        <div className=" text-3xl uppercase relative text-center pt-10 mt-10  md:py-[10%] lg:py-[10%]">
          <p>Ingeniería en Computación</p>
          <p className="pt-8">(2012 - 2019)</p>
        </div>
      </div>

      {/**Contenido */}
      <div className="relative md:pt-5 lg:pt-10 text-center">
        <h1 className="uppercase text-center text-2xl pt-10 mt-5  md:text-6xl md:pt-0 md:mt-0">
          Conocimientos en:
        </h1>
        {/* Contenido de imagenes */}
        <div className="flex gap-5 pt-8  lg:text-4xl">
          {conocimientos.map((conocimiento) => (
            <Conocimientos key={conocimiento.id} conocimiento={conocimiento} />
          ))}
        </div>

        <h1 className="pt-8 text-2xl uppercase md:text-3xl lg:text-5xl lg:pt-10">
          Proyectos Recientes
        </h1>
        {/* Proyecto Escuela */}
        <div className="grid grid-cols-2 pt-5 text-left animate__animated animate__fadeInUp">
          <img
            src={ProjectElhm}
            alt="imagen de ELHM"
            className=" md:w-11/12 md:mx-auto animate__animated animate__fadeInRight w-4/3 lg:w-full"
          />
          <div className="ml-5 text-sm md:text-lg md:my-auto lg:text-4xl">
            <h1 className="text-xl md:text-3xl lg:text-6xl">ELHM - I.A.P.</h1>
            <p>React + Gatsby + DatoCMS</p>
            <div className="text-xs md:text-xl ">
              <a
                className="hover:underline "
                target={"_blank"}
                href="http://www.escuelalibredehomeopatia.com.mx/"
              >
                <p>Enlace: Escuela Libre de Homeopatía de México</p>
              </a>
            </div>
          </div>
        </div>
        {/* Proyecto CLF */}
        <div className="grid grid-cols-2 pt-5 text-left animate__animated animate__fadeInUp">
          <img
            src={ProjectCLF}
            alt="imagen de Graphql"
            className=" md:w-11/12 md:mx-auto animate__animated animate__fadeInRight w-4/3 lg:w-full"
          />
          <div className="ml-5 text-sm md:text-lg md:my-auto lg:text-4xl">
            <h1 className="text-xl md:text-3xl lg:text-6xl">SystemCLF</h1>
            <p>React + Redux + StyledComponents</p>
            <p>Diseño en Figma</p>
            <div className="text-xs md:text-xl ">
              <a
                className="hover:underline "
                target={"_blank"}
                href="https://relaxed-villani-ccb115.netlify.app/"
              >
                Enlace: SystemCLF - Alojado en Netlify
              </a>
              <p>Backend en nodejs - Alojado en Heroku</p>
              <a
                className="hover:underline "
                target={"_blank"}
                href="https://github.com/sergiogswv/systemclf"
              >
                <p>Enlace: Codigo - Github</p>
              </a>
            </div>
          </div>
        </div>
        {/* Proeycto Shop */}
        <div className="grid grid-cols-2 pt-5 text-left animate__animated animate__fadeInUp">
          <img
            src={ProjectShop}
            alt="imagen de Graphql"
            className=" md:w-11/12 md:mx-auto animate__animated animate__fadeInRight w-4/3 lg:w-full"
          />
          <div className="ml-5 text-sm md:text-lg md:my-auto lg:text-4xl">
            <h1 className="text-xl md:text-3xl lg:text-6xl">
              Bshop - En Construcción
            </h1>
            <p>Next.js + Tailwindcss + ContextAPI + Graphql + DatoCMS</p>
            <p>Diseño en Figma</p>
          </div>
        </div>
        {/* Proyectos de Sigma */}
        <div className="block w-10/12 mx-auto pt-5 mb-20 animate__animated animate__fadeInUp">
          <h1 className="text-xl mb-5 md:text-3xl uppercase lg:text-5xl">
            Diseños en Figma
          </h1>
          <img
            src={ProjectFigma}
            alt="imagen de Graphql"
            className=" md:w-11/12 md:mx-auto animate__animated animate__fadeInRight w-4/3 lg:w-full"
          />
        </div>
      </div>
      <div className="text-white text-center mb-5 ">
        <h1 className="text-2xl uppercase md:text-3xl lg:text-5xl lg:pt-10">
          Proyectos de aprendizaje
        </h1>
        {/* Proyectos aprendizaje */}
        {/**Contenedor */}
        <div className="grid grid-cols-1 md:grid-cols-3 pt-5">
          {proyectos.map((proyecto) => (
            <Apredizaje proyecto={proyecto} key={proyecto.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default School;
