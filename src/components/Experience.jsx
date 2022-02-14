import Trabajo from "./Trabajo";

const Experience = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:items-center md:grid-cols-2 md:w-full">
      <Trabajo
        titulo="Nadro"
        subtitulo="(2019 - Actual)"
        descripcion="~ Analista de IT (Analista de datos, Integraciones a WS con nuevos
              clientes, Conciliaciones con Autoservicios, etc)."
      />
      <Trabajo
        titulo="Escuela Libre Homeopatía de México"
        subtitulo="(2016 - 2019)"
        descripcion="~ Encargado del área de Sistema (Creación y Actualización de
            Pag.Web, Soporte técnico, Cableado)."
      />
      <Trabajo
        titulo="Compañia de Procesamiento Mexicana"
        subtitulo="(2014 - 2016)"
        descripcion="~ Data Stage (Generacion y procesamiento de archivos)  ~ Soporte Técnico"
      />
      <Trabajo
        titulo="Trabajos de Freelance:"
        subtitulo="(2021)"
        descripcion="escuelalibredehomeopatia.com.mx (React - Gatsby / DatoCMS)"
      />
    </div>
  );
};

export default Experience;
