import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
// Styles
import {
  PriceContainerStyled,
  ButtonsContainerStyled,
} from "../styles/FooterTableStyled";
// Redux
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { clearCart } from "../../../features/productsInSalesOrder/productsInSalesOrderSlice";
import { editBank } from "../../../features/userData/userDataSlice";
// Models
import { Products } from "../../../models/Products/Products.model";
// Services
import useHttpEditProduct from "../../../services/products/useHttpEditProduct";

interface IPrice {
  precioFinal: number;
}

const FooterTable = ({ precioFinal }: IPrice) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { httpEditProductAsync } = useHttpEditProduct();

  const ListaOrdenDeVenta = useAppSelector(
    (state) => state.productosEnOrdenDeVenta
  );

  const ProductsInStock = useAppSelector((state) => state.products.products);

  // Mostart precio con dos decimales
  const precioFinalConDosDecimales = precioFinal?.toFixed(2).replace(".", ",");

  // Funcion para cancelar venta
  const handleCancelar = () => {
    // limpiar carrito redux
    dispatch(clearCart("clear"));
    // redireccionar a ventas
    navigate("/");
  };

  const handleSell = () => {
    if (precioFinal === 0) {
      return;
    }
    // Descontar stock de cada producto
    sellProducts();
    // Añadir al banco
    dispatch(editBank(precioFinal));
    // limpiar carrito redux
    dispatch(clearCart("clear"));
  };

  const sellProducts = () => {
    // Lista de productos en orden de venta
    ListaOrdenDeVenta.forEach((item: Products) => {
      // si item.id de la lista es igual al producto que esta en la base de datos
      const productBase = ProductsInStock.find(
        (product: Products) => product._id === item._id
      );
      // restar stock
      const newStock = productBase && productBase.stock - item.stock;
      if (newStock !== undefined && productBase !== undefined) {
        // crear objeto producto con stock actualizado
        const newProduct = {
          name: item.name,
          stock: newStock,
          price: item.price,
          code: item.code,
        };
        // editar producto en la base de datos
        dispatch(httpEditProductAsync({ id: item._id, body: newProduct }));
        console.log("corregir editar producto", newProduct);
      }
    });
  };

  return (
    <div>
      <PriceContainerStyled>
        Precio total $ {precioFinalConDosDecimales || 0}
      </PriceContainerStyled>
      <ButtonsContainerStyled>
        <Button variant="contained" color="success" onClick={handleSell}>
          Vender
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => handleCancelar()}
        >
          Cancelar
        </Button>
      </ButtonsContainerStyled>
    </div>
  );
};

export default FooterTable;
