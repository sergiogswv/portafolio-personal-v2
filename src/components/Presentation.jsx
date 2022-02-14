import Sergio from "../img/img-personal.png";

const Presentation = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2">
      <div className="animate__animated animate__fadeInDown">
        <img src={Sergio} alt="Sergio" />
      </div>
      <div className="p-5 md:my-auto mx-auto">
        {/**titulo */}
        <h1 className="animate__animated animate__fadeIn text-4xl text-white font-['Quantico'] xl:text-5xl">
          Hola soy Sergio
        </h1>
        {/**Presentacion */}
        <p className="animate__animated  animate__fadeIn font-['Quantico'] text-white text-3xl pt-10">
          Un desarrollador web y analista de IT, entusiasta con mis proyectos y
          mi trabajo. Con muchas ganas de seguir aprendiendo y, no puede faltar,
          luchar con el día a día siendo un padre ejemplar.
        </p>
        {/**Bienvenida */}
        <h2 className="animate__animated  animate__fadeIn font-['Quantico'] text-white text-4xl pt-10 xl:text-5xl">
          Bienvenido(a) a mi Portafolio Web!
        </h2>

        {/**Linea divisoria */}
        <div className="bg-[#6CAEF5] h-3 w-52 mb-14"></div>
      </div>
    </div>
  );
};

export default Presentation;
