const Trabajo = ({ titulo, subtitulo, descripcion }) => {
  return (
    <div className="md:h-auto">
      {/**Cuadro de descripcion de trabajo */}
      <div className=" w-[325.72px]  mx-auto pt-5 flex items-end animate__animated animate__fadeInUpBig md:w-10/12">
        {/**contenido */}
        <div className="font-['Quantico'] h-auto pb-5 rounded-3xl shadow-inner shadow-gray-900 md:shadow-none md:border-l-[10px] md:border-[#FAC16B] md:rounded-none ">
          {/**Titulo */}
          <h1 className="text-white text-4xl text-center pt-8 font-bold md:text-4xl">
            {titulo}
          </h1>
          {/**Subtitulo */}
          <p className="text-md font-bold text-center pt-2 text-gray-600">
            {subtitulo}
          </p>
          {/**Descripcion */}
          <div>
            <p className="text-[#FAC16B] text-2xl pt-5 mx-5 ">{descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabajo;
