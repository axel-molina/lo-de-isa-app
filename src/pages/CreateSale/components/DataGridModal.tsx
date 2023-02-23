import React from 'react';
// Interface
import { IProducts } from '../../../models/ProductsModel';
// Styles
import {
  ContainerGridStyled,
  HeaderGridStyledModal,
  ItemContainerStyledModal,
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
      <HeaderGridStyledModal>
        <div>Producto</div>
        <div>Precio</div>
        <div>Stock</div>
        <div></div>
      </HeaderGridStyledModal>
      {productsList.map((item: IProducts) => (
        <ItemContainerStyledModal key={item.id} onClick={() => addItem(item)}>
          <div>{item.name}</div>
          <div style={{ marginLeft: '25%' }}>${item.price.toFixed(2)}</div>
          <div style={{ marginLeft: '48%' }}>{item.stock}</div>
        </ItemContainerStyledModal>
      ))}
    </ContainerGridStyled>
  );
};

export default DataGridModal;
