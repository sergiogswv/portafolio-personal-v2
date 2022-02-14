import Fondo from "../img/fondo.png";
import ImgReact from "../img/react-img.png";
import ImgSql from "../img/sql-img.png";
import ImgOffice from "../img/office-img.png";
import ImgGraphql from "../img/graphql-img.png";

const School = () => {
  return (
    <div className="font-['Quantico'] text-white grid grid-cols-1 md:w-full">
      {/**Fondo */}
      <div className="mb-16 md:w-full md:block">
        {/**Imagen */}
        <img
          src={Fondo}
          alt=""
          className="blur-[1px] absolute md:blur-[2px] md:h-[75%] md:w-full"
        />
        {/**Contenedor */}
        <div className=" text-3xl uppercase relative text-center pt-8 animate__animated animate__fadeInRight md:py-[17.5%]">
          <p>Ingeniería en Computación</p>
          <p className="pt-8">(2012 - 2019)</p>
        </div>
      </div>

      {/**Contenido */}
      <div className="relative md:pt-32 lg:pt-10">
        <h1 className="uppercase text-center text-2xl pt-5 animate__animated md:text-6xl">
          Conocimientos en:
        </h1>
        <div className="grid grid-cols-2 gap-5 pt-8">
          <div className="w-11/12 items-center my-auto mx-auto">
            <img
              src={ImgReact}
              alt="imagen de React "
              className="hover:blur-sm md:w-1/2 md:mx-auto animate__animated animate__fadeInLeft"
            />
          </div>
          <div className="w-11/12 items-center my-auto mx-auto">
            <img
              src={ImgSql}
              alt="imagen de Sql "
              className="hover:blur-sm md:w-1/2 md:mx-auto animate__animated animate__fadeInRight"
            />
          </div>
          <div className="w-11/12 items-center my-auto mx-auto">
            <img
              src={ImgOffice}
              alt="imagen de Office"
              className="hover:blur-sm md:w-1/2 md:mx-auto animate__animated animate__fadeInLeft"
            />
          </div>
          <div className="w-11/12 items-center my-auto mx-auto">
            <img
              src={ImgGraphql}
              alt="imagen de Graphql"
              className="hover:blur-sm md:w-1/2 md:mx-auto animate__animated animate__fadeInRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
