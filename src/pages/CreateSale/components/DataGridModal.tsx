/* eslint-disable multiline-ternary */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Interface
import { IProducts } from "../../../models/ProductsModel";
// Styles
import {
  ContainerGridStyled,
  HeaderGridStyledModal,
  EmptyProductsContainer,
  ItemContainerStyledModal,
} from "../styles/DataGridStyled";
// Redux
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addProduct } from "../../../features/productsInSalesOrder/productsInSalesOrderSlice";
// Components
import { Button } from "@mui/material";
// import Spinner from "../../../components/Spinner/Spinner";
import { message } from "antd";
import { PageRoutes } from "../../../routes";
// Services
import useHttpGetProducts from "../../../services/products/useHttpGetProducts";
import Spinner from "../../../components/Spinner/Spinner";

interface IPropsDataGridModal {
  searchState: string;
}

const DataGridModal = ({ searchState }: IPropsDataGridModal) => {
  const { httpGetProductsAsync } = useHttpGetProducts();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(
    (state) => state.loadingProduct.isLoadingProducts
  );
  const cart = useAppSelector((state) => state.productosEnOrdenDeVenta);
  const products = useAppSelector((state) => state.products);
  // const email = localStorage.getItem("email");

  const noStockAvalible = (item: IProducts) =>
    // Verificar si el item ya existe en el carrito y si la cantidad es igual al stock
    cart.find((cartItem) => cartItem.id === item.id) &&
    cart.find((cartItem) => cartItem.id === item.id)?.stock === item.stock;
  const addItem = (item: IProducts) => {
    if (noStockAvalible(item)) {
      message.error("No hay suficiente stock disponible");
      return;
    }
    // hacer una copia del item
    const newItem = { ...item };
    // agregar la propiedad stock
    newItem.stock = 1;
    // Añadir a redux
    dispatch(addProduct(newItem));
    message.success("Producto añadido");
  };

  useEffect(() => {
    dispatch(httpGetProductsAsync(1, 10, searchState.toString()));
  }, [searchState]);

  return (
    <ContainerGridStyled>
      <HeaderGridStyledModal>
        <div>Producto</div>
        <div>Precio</div>
        <div>Stock</div>
        <div></div>
      </HeaderGridStyledModal>
      {isLoading ? (
        <div style={{ margin: "30px 0" }}>
          <Spinner />
        </div>
      ) : (
        products.map((item: IProducts) => (
          <ItemContainerStyledModal key={item.id} onClick={() => addItem(item)}>
            <div>{item?.name}</div>
            <div style={{ marginLeft: "25%" }}>${item?.price?.toFixed(2)}</div>
            <div style={{ marginLeft: "48%" }}>{item?.stock}</div>
          </ItemContainerStyledModal>
        ))
      )}

      {(products?.length === 0 || products === null) && !isLoading && (
        <EmptyProductsContainer>
          <p style={{ textAlign: "center" }}>
            Aún no hay productos en tu lista
          </p>
          <Button
            color="success"
            variant="contained"
            onClick={() => navigate(PageRoutes.editStock)}
          >
            Agregar productos
          </Button>
        </EmptyProductsContainer>
      )}
    </ContainerGridStyled>
  );
};

export default DataGridModal;
