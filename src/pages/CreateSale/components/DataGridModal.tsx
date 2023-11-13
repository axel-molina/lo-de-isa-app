/* eslint-disable multiline-ternary */
import { useNavigate } from "react-router-dom";
// Interface
import { Products } from "../../../models/Products/Products.model";
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
import { message } from "antd";
import { PageRoutes } from "../../../routes";
import Spinner from "../../../components/Spinner/Spinner";

const DataGridModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(
    (state) => state.loadingProduct.isLoadingProducts
  );
  const cart = useAppSelector((state) => state.productosEnOrdenDeVenta);
  const products = useAppSelector((state) => state.products.products);
  // const email = localStorage.getItem("email");

  const noStockAvalible = (item: Products) =>
    // Verificar si el item ya existe en el carrito y si la cantidad es igual al stock
    cart.find((cartItem) => cartItem._id === item._id) &&
    cart.find((cartItem) => cartItem._id === item._id)?.stock === item.stock;
  const addItem = (item: Products) => {
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
        products.map((item: Products) => (
          <ItemContainerStyledModal
            key={item._id}
            onClick={() => addItem(item)}
          >
            <div>{item?.name}</div>
            <div style={{ marginLeft: "25%" }}>${item?.price?.toFixed(2)}</div>
            <div style={{ marginLeft: "48%" }}>{item?.stock}</div>
          </ItemContainerStyledModal>
        ))
      )}

      {(products.length === 0 || products === null) && !isLoading && (
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
