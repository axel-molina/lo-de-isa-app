import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PayloadAction } from '@reduxjs/toolkit';

import { IProducts } from '../../models/ProductsModel';
import products from '../../data/Products';

const initialState: IProducts[] = products;

export const productsSlice = createSlice({
  name: 'products',
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

export const { addProduct, removeProduct } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.productos;

export default productsSlice.reducer;
