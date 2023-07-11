import { useState, useEffect } from "react";
// Components
import Header from "../../components/NavBar";
import DataGrid from "./components/DataGrid";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import FooterTable from "./components/FooterTable";
// Interface
import { IProducts } from "../../models/ProductsModel";
import ModalAñadirProd from "./components/ModalAddProd";
// Redux
import { useAppSelector } from "../../app/hooks";
// Styles
import { ContainerStyled, ContainerButton } from "./styles/Styles";

const Index = () => {
  const ListaOrdenDeVenta = useAppSelector(
    (state) => state.productosEnOrdenDeVenta
  );

  const [show, setShow] = useState<boolean>(false);

  const sumaDePrecios = (): number => {
    let suma = 0;
    ListaOrdenDeVenta.forEach((item: IProducts) => {
      suma += item.price * item.quantity;
    });
    return suma;
  };

  // Mostrar el modal
  const showModal = () => {
    setShow(true);
  };

  useEffect(() => {
    sumaDePrecios();
  }, [ListaOrdenDeVenta]);

  return (
    <>
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
            Añadir
          </Button>
        </ContainerButton>
        <DataGrid />
        <FooterTable precioFinal={sumaDePrecios()} />
        <ModalAñadirProd show={show} setShow={setShow} />
      </ContainerStyled>
    </>
  );
};

export default Index;
