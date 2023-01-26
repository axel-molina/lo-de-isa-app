import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PayloadAction } from '@reduxjs/toolkit';

import { IProducts } from '../../models/ProductsModel';

const initialState: IProducts[] = [];

export const productsInSalesOrderSlice = createSlice({
  name: 'productsInSalesOrder',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProducts>) => {
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<IProducts>) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addProduct, removeProduct } = productsInSalesOrderSlice.actions;

export const selectProductsInSalesOrder = (state: RootState) =>
  state.productosEnOrdenDeVenta;

export default productsInSalesOrderSlice.reducer;
