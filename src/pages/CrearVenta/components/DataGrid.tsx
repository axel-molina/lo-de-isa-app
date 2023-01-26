import React from 'react';
import { Button } from '@mui/material';
import { AddCircle, Delete } from '@mui/icons-material';
// Interface
import { IProducts } from '../../../models/ProductsModel';

const DataGrid = ({ products }: IProducts[] | any, action: string) => {
  const deleteItem = (id: number) => {
    console.log('delete item', id);
  };

  const addItem = (item: IProducts) => {
    console.log('Add item: ', item);
  };

  return (
    <div
      style={{
        border: '1px solid #ECF0F1',
        borderRadius: '5px',
        height: '60vh',
        overflow: 'scroll',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 1fr 1fr 1fr',
          alignItems: 'center',
          padding: '10px',
          borderTop: '1px solid #ECF0F1',
          fontWeight: 'bold',
          backgroundColor: '#ECF0F1',
        }}
      >
        <div>Producto</div>
        <div>Precio</div>
        <div>Cantidad</div>
        <div></div>
      </div>
      {products.map((item: IProducts) => (
        <div
          key={item.id}
          style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr 1fr 1fr',
            alignItems: 'center',
            padding: '10px',
            borderBottom: '1px solid #ECF0F1',
          }}
        >
          <div>{item.nombre}</div>
          <div>${item.precio}</div>
          <div style={{ marginLeft: '22px' }}>{item.cantidad}</div>
          {action === 'delete' ? (
            <div>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteItem(item.id)}
              >
                <Delete />
              </Button>
            </div>
          ) : (
            <div>
              <Button
                variant="contained"
                color="error"
                onClick={() => addItem(item)}
              >
                <AddCircle />
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DataGrid;
