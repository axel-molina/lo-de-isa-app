import React, { useState } from "react";
// Components
import Header from "../../components/NavBar";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import DataGridStock from "./components/DataGridStock";
import ModalAddNewProduct from "./components/AddNewProductModal";
// Styles
import { ContainerStyled, ContainerButton } from "../CreateSale/styles/Styles";

const index = () => {
  const [show, setShow] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  return (
    <div>
      <Header />
      <ContainerStyled>
        <ContainerButton>
          <Button
            variant="contained"
            color="success"
            style={{ paddingLeft: "4px" }}
            onClick={() => {
              showModal();
            }}
          >
            <Add />
            Añadir producto
          </Button>
        </ContainerButton>
        <DataGridStock refresh={refresh} setRefresh={setRefresh} />
      </ContainerStyled>
      {/* Modal agregar producto nuevo */}
      <ModalAddNewProduct
        show={show}
        setShow={setShow}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
};

export default index;
