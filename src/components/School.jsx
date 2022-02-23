import Layout from "./Layout";
import Fondo from "../img/fondo.png";
/* Imagenes pequeñas  */
import ImgReact from "../img/react-img.png";
import ImgSql from "../img/sql-img.png";
import ImgOffice from "../img/office-img.png";
import ImgGraphql from "../img/graphql-img.png";
/* Imagenes de proyectos */
import ProjectCLF from "../img/CLF-Devices.png";
import ProjectShop from "../img/bshop-devices.png";
import ProjectFigma from "../img/Figma.png";

const School = () => {
  return (
    <Layout>
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
          <div className=" text-3xl uppercase relative text-center pt-8  md:py-[17.5%] lg:py-[10%]">
            <p>Ingeniería en Computación</p>
            <p className="pt-8">(2012 - 2019)</p>
          </div>
        </div>

        {/**Contenido */}
        <div className="relative md:pt-10 lg:pt-10 text-center">
          <h1 className="uppercase text-center text-2xl pt-5 animate__animated md:text-6xl">
            Conocimientos en:
          </h1>
          {/* Contenido de imagenes */}
          <div className="flex gap-5 pt-8 lg:text-4xl">
            <div className="w-11/12 items-center my-auto mx-auto ">
              {/* Imagen y sub */}
              <img
                src={ImgReact}
                alt="imagen de React "
                className="hover:blur-sm md:w-1/2 md:mx-auto animate__animated animate__fadeInLeft w-4/3"
              />
              <p>REACT</p>
            </div>
            <div className="w-11/12 items-center my-auto mx-auto">
              {/* Imagen y sub */}
              <img
                src={ImgSql}
                alt="imagen de Sql "
                className="hover:blur-sm md:w-1/2 md:mx-auto animate__animated animate__fadeInRight w-4/3"
              />
              <p>SQL</p>
            </div>
            <div className="w-11/12 items-center my-auto mx-auto">
              {/* Imagen y sub */}
              <img
                src={ImgOffice}
                alt="imagen de Office"
                className="hover:blur-sm md:w-1/2 md:mx-auto animate__animated animate__fadeInLeft w-4/3"
              />
              <p>OFFICE</p>
            </div>
            <div className="w-11/12 items-center my-auto mx-auto">
              {/* Imagen y sub */}
              <img
                src={ImgGraphql}
                alt="imagen de Graphql"
                className="hover:blur-sm md:w-1/2 md:mx-auto animate__animated animate__fadeInRight w-4/3"
              />
              <p>GRAPHQL</p>
            </div>
          </div>
          <h1 className="pt-8 text-2xl uppercase md:text-3xl lg:text-5xl lg:pt-10">
            Proyectos Recientes
          </h1>
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
              <h1 className="text-xl md:text-3xl lg:text-6xl">Bshop</h1>
              <p>React + Tailwindcss</p>
              <p>Diseño en Figma</p>
            </div>
          </div>
          {/* Proyectos de Sigma */}
          <div className="block w-10/12 mx-auto pt-5 mb-32 animate__animated animate__fadeInUp">
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
      </div>
    </Layout>
  );
};

export default School;
