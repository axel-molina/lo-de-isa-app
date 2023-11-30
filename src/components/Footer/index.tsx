import React from "react";

const index = () => {
  // Funcion para devolver el año actual
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <div
      style={{
        backgroundColor: "#257dd4",
        padding: "7px",
        color: "white",
      }}
    >
      <p
        style={{
          textAlign: "center",
        }}
      >
        ©️ Molisoft {getYear()} - Todos los derechos reservados.
      </p>
    </div>
  );
};

export default index;
