import React from 'react';
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
import { addProduct } from '../../../features/productsInSalesOrder/productsInSalesOrderSlice';

const DataGridModal = () => {
  const dispatch = useAppDispatch();
  const productsList = useAppSelector((state) => state.productos);

  const addItem = (item: IProducts) => {
    // Añadir a redux
    dispatch(addProduct(item));
  };

  return (
    <ContainerGridStyled>
      <HeaderGridStyled>
        <div>Producto</div>
        <div>Precio</div>
        <div>Stock</div>
        <div></div>
      </HeaderGridStyled>
      {productsList.map((item: IProducts) => (
        <ItemContainerStyled key={item.id} onClick={() => addItem(item)}>
          <div>{item.nombre}</div>
          <div>${item.precio}</div>
          <div style={{ marginLeft: '10px' }}>{item.stock}</div>
        </ItemContainerStyled>
      ))}
    </ContainerGridStyled>
  );
};

export default DataGridModal;
