import Objective from "../img/objectives.png";
import Skill from "../img/skills.png";

const Skills = () => {
  return (
    <div className="md:grid md:grid-cols-2 md:items-start">
      {/**Cuadro de descripcion de trabajo */}
      <div className=" w-full  mx-auto pt-5 flex items-end animate__animated animate__fadeInTopLeft">
        {/**contenido */}
        <div className="font-['Quantico'] h-auto pb-5">
          {/**Descripcion */}
          <div className="w-full text-center mx-auto absolute md:relative md:h-80">
            <p className="text-[#FAC16B] text-2xl pt-10 mx-5 md:text-4xl ">
              Aspiro a desarrollar mis aptitudes en una gran empresa de renombre
              asi como ambiciono extender mis competencias en el área que me
              apasiona.
            </p>
          </div>
          {/**Imagen */}
          <div>
            <img
              src={Skill}
              alt="Skills"
              className="opacity-20 md:opacity-100"
            />
          </div>
        </div>
      </div>

      {/*Segundo bloque */}
      {/**Cuadro de descripcion de trabajo */}
      <div className=" w-full  mx-auto pt-5 flex items-end animate__animated animate__fadeInTopRight">
        {/**contenido */}
        <div className="font-['Quantico'] h-auto pb-5">
          {/**Descripcion */}
          <div className="w-full pl-[20%] absolute md:relative md:h-80">
            <ul className="list-disc text-[#FAC16B] text-2xl pt-10 mx-5 md:text-3xl">
              <li>Trabajo en Equipo</li>
              <li>Confianza</li>
              <li>Responsabilidad</li>
              <li>Compromiso</li>
              <li>Capacidad de actualizar los conocimientos</li>
              <li>Capacidad de análisis</li>
              <li>Autodidacta</li>
            </ul>
          </div>
          <div>
            {/**Imagen */}
            <img
              src={Objective}
              alt="Objectives"
              className="absolute opacity-20 md:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
