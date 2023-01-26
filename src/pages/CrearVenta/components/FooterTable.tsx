import React from "react";
import { Button } from "@mui/material";

interface IPrice {
  precioFinal: number | undefined;
}

const FooterTable = ({precioFinal}: IPrice) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "60px",
          paddingRight: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "green",
          backgroundColor: "#ECF0F1",
          borderTop: "1px solid #ECF0F1",
        }}
      >
        Precio total $ {precioFinal ? precioFinal : 0}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Button variant="contained" color="success" style={{ margin: "10px" }}>
          Vender
        </Button>
        <Button variant="contained" color="error" style={{ margin: "10px" }}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default FooterTable;
