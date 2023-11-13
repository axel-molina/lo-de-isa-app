import { useState, useEffect } from "react";
// Components
import Header from "../../components/NavBar";
import DataGrid from "./components/DataGrid";
import Button from "@mui/material/Button";
import { Add } from "@mui/icons-material";
import FooterTable from "./components/FooterTable";
// Interface
import { Products } from "../../models/Products/Products.model";
import ModalAñadirProd from "./components/ModalAddProd";
// Redux
import { useAppSelector, useAppDispatch } from "../../app/hooks";
// Styles
import { ContainerStyled, ContainerButton } from "./styles/Styles";
// Services
import useHttpGetProducts from "../../services/products/useHttpGetProducts";

const Index = () => {
  const { httpGetProductsAsync } = useHttpGetProducts();

  const dispatch = useAppDispatch();

  const ListaOrdenDeVenta = useAppSelector(
    (state) => state.productosEnOrdenDeVenta
  );

  const [show, setShow] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const sumaDePrecios = (): number => {
    let suma = 0;
    ListaOrdenDeVenta.forEach((item: Products) => {
      suma += item.price * item.stock;
    });
    return suma;
  };

  // Mostrar el modal
  const showModal = () => {
    setShow(true);
  };

  // Cuando se presiona enter en el input de buscar
  const handleSearchProduct = () => {
    dispatch(httpGetProductsAsync(1, 10, search.toString()));
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
        <ModalAñadirProd
          show={show}
          setShow={setShow}
          handleSearchProduct={handleSearchProduct}
          setSearch={setSearch}
          search={search}
        />
      </ContainerStyled>
    </>
  );
};

export default Index;
