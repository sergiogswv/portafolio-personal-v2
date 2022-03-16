const Conocimientos = ({ conocimiento }) => {
  return (
    <div className="w-11/12 items-center my-auto mx-auto ">
      {/* Imagen y sub */}
      <img
        src={conocimiento.imagen}
        alt="imagen de React "
        className="hover:blur-sm md:w-1/2 md:mx-auto   w-4/3"
      />
      <p className="uppercase">{conocimiento.titulo}</p>
    </div>
  );
};

export default Conocimientos;
