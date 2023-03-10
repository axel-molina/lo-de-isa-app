import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PayloadAction } from '@reduxjs/toolkit';

import { IProducts } from '../../models/ProductsModel';

const initialState: any = [];
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<IProducts>) => {
      // console.log('action.payload', action.payload);
      state = action.payload;
    },
    removeProduct: (state, action: PayloadAction<IProducts>) => {
      return state.filter((product: any) => product._id !== action.payload._id);
    },
  },
});

export const { addProducts, removeProduct } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.productos;

export default productsSlice.reducer;
