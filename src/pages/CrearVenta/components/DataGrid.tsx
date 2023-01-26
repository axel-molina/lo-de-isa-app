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

const DataGrid = (
  { products }: IProducts[] | any,
  action: string,
  setListaOrdenDeVenta: (value: React.SetStateAction<IProducts[]>) => void
) => {
  const deleteItem = (id: number) => {
    console.log('delete item', id);
  };

  const addItem = (item: IProducts) => {
    setListaOrdenDeVenta([...products, item]);
  };

  return (
    <ContainerGridStyled>
      <HeaderGridStyled>
        <div>Producto</div>
        <div>Precio</div>
        {action === 'delete' ? <div>Cantidad</div> : <div>Stock</div>}
        <div></div>
      </HeaderGridStyled>
      {products.map((item: IProducts) => (
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
                onClick={() => deleteItem(item.id)}
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
