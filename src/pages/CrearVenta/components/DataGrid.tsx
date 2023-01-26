import React from 'react';
import { Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
// Interface
import { IProducts } from '../../../models/ProductsModel';
// Styles
import {
  HeaderGridStyled,
  ItemContainerStyled,
  ContainerGridStyled,
} from '../styles/DataGridStyled';
// Redux
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  addProduct,
  removeProduct,
} from '../../../features/productsInSalesOrder/productsInSalesOrderSlice';

interface IProps {
  action: 'delete' | 'add';
}

const DataGrid = ({action}: IProps) => {
  const dispatch = useAppDispatch();

  const productosEnOrdenDeVenta = useAppSelector(
    (state) => state.productosEnOrdenDeVenta
  );

  const deleteItem = (item: IProducts) => {
    // Eliminar de redux
    dispatch(removeProduct(item));
  };

  const addItem = (item: IProducts) => {
    // Añadir a redux
    dispatch(addProduct(item));
  };

  return (
    <ContainerGridStyled>
      <HeaderGridStyled>
        <div>Producto</div>
        <div>Precio</div>
        {action === 'delete' ? <div>Cantidad</div> : <div>Stock</div>}
        <div></div>
      </HeaderGridStyled>
      {productosEnOrdenDeVenta.map((item: IProducts) => (
        <ItemContainerStyled
          key={item.id}
          onClick={action === 'delete' ? undefined : () => addItem(item)}
        >
          <div>{item.nombre}</div>
          <div>${item.precio}</div>
          <div
            style={
              action === 'delete'
                ? { marginLeft: '22px' }
                : { marginLeft: '10px' }
            }
          >
            {action === 'delete' ? item.cantidad : item.stock}
          </div>
          {action === 'delete' && (
            <div>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteItem(item)}
              >
                <Delete />
              </Button>
            </div>
          )}
        </ItemContainerStyled>
      ))}
    </ContainerGridStyled>
  );
};

export default DataGrid;
