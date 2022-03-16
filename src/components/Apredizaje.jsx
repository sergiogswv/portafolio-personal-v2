import React from "react";

const Apredizaje = ({ proyecto }) => {
  return (
    <div className="m-5">
      <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold">
        {proyecto.titulo}
      </h1>
      <p className="text-xl md:text-2xl lg:text-4xl">{proyecto.descripcion}</p>
      <a className="hover:underline " target={"_blank"} href={proyecto.enlace}>
        <p>Enlace de Github</p>
      </a>
    </div>
  );
};

export default Apredizaje;
