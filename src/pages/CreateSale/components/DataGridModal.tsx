import { useEffect } from "react";
// Interface
import { IProducts } from "../../../models/ProductsModel";
// Styles
import {
  ContainerGridStyled,
  HeaderGridStyledModal,
  ItemContainerStyledModal,
} from "../styles/DataGridStyled";
// Redux
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addProduct } from "../../../features/productsInSalesOrder/productsInSalesOrderSlice";
// Hooks
import useProductListHook from "../../../hooks/useProductListHook";
// Components
import { Button } from "@mui/material";
// import Spinner from "../../../components/Spinner/Spinner";
import { message } from "antd";

const DataGridModal = () => {
  const dispatch = useAppDispatch();
  const { getProducts, isLoading } = useProductListHook();
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

  // console.log(products);

  useEffect(() => {
    getProducts(1);
  }, []);

  return (
    <ContainerGridStyled>
      <HeaderGridStyledModal>
        <div>Producto</div>
        <div>Precio</div>
        <div>Stock</div>
        <div></div>
      </HeaderGridStyledModal>
      {products &&
        products.map((item: IProducts) => (
          <ItemContainerStyledModal
            key={item.id}
            onClick={() => addItem(item)}
          >
            <div>{item?.name}</div>
            <div style={{ marginLeft: "25%" }}>${item?.price?.toFixed(2)}</div>
            <div style={{ marginLeft: "48%" }}>{item?.stock}</div>
          </ItemContainerStyledModal>
        ))}

      {(products?.length === 0 || products === null) && !isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <p style={{ textAlign: "center" }}>
            Aún no hay productos en tu lista
          </p>
          <Button color="success" variant="contained">
            Agregar productos
          </Button>
        </div>
      )}
    </ContainerGridStyled>
  );
};

export default DataGridModal;
