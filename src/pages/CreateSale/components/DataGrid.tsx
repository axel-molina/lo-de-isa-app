import React from "react";
import { Button } from "@mui/material";
import { Delete, DeleteForever } from "@mui/icons-material";
// Interface
import { Products } from "../../../models/Products/Products.model";
// Styles
import {
  HeaderGridStyled,
  ItemContainerStyled,
  ContainerGridStyled,
  InfoStyled,
} from "../styles/DataGridStyled";
// Redux
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  removeOneProduct,
  removeAllItems,
} from "../../../features/productsInSalesOrder/productsInSalesOrderSlice";

const DataGrid = () => {
  const dispatch = useAppDispatch();

  const productosEnOrdenDeVenta = useAppSelector(
    (state) => state.productosEnOrdenDeVenta
  );

  const deleteItem = (item: Products) => {
    // Eliminar de redux
    dispatch(removeOneProduct(item));
  };

  const deleteAllItems = (item: Products) => {
    // Eliminar de redux
    dispatch(removeAllItems(item));
  };

  return (
    <ContainerGridStyled>
      <HeaderGridStyled>
        <div>Producto</div>
        <div>Eliminar</div>
        <div>Eliminar todo</div>
      </HeaderGridStyled>
      {productosEnOrdenDeVenta.map((item: Products) => (
        <ItemContainerStyled key={item._id}>
          <div>
            <div style={{ display: "flex", gap: "10px" }}>
              <b>{item.name}</b>
              <InfoStyled>x{item.stock}</InfoStyled>
            </div>
            <InfoStyled>${item.price.toFixed(2)}</InfoStyled>
          </div>
          <div style={{}}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteItem(item)}
            >
              <Delete />
            </Button>
          </div>
          <div style={{ marginLeft: "15px" }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteAllItems(item)}
            >
              <DeleteForever />
            </Button>
          </div>
        </ItemContainerStyled>
      ))}
    </ContainerGridStyled>
  );
};

export default DataGrid;
