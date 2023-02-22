import React from 'react';
import { Button } from '@mui/material';
import { Delete, DeleteForever } from '@mui/icons-material';
// Interface
import { IProducts } from '../../../models/ProductsModel';
// Styles
import {
  HeaderGridStyled,
  ItemContainerStyled,
  ContainerGridStyled,
  InfoStyled,
} from '../styles/DataGridStyled';
// Redux
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  removeOneProduct,
  removeAllItems,
} from '../../../features/productsInSalesOrder/productsInSalesOrderSlice';

const DataGrid = () => {
  const dispatch = useAppDispatch();

  const productosEnOrdenDeVenta = useAppSelector(
    (state) => state.productosEnOrdenDeVenta
  );

  const deleteItem = (item: IProducts) => {
    // Eliminar de redux
    dispatch(removeOneProduct(item));
  };

  const deleteAllItems = (item: IProducts) => {
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
      {productosEnOrdenDeVenta.map((item: IProducts) => (
        <ItemContainerStyled key={item.id}>
          <div>
          <b>{item.nombre}</b>
          <InfoStyled>Código: {item.codigo}</InfoStyled>
          <InfoStyled>${item.precio.toFixed(2)}</InfoStyled>
          <InfoStyled>Cantidad: {item.cantidad}</InfoStyled>
          </div>
          <div style={{  }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteItem(item)}
            >
              <Delete />
            </Button>
          </div>
          <div style={{  }}>
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
