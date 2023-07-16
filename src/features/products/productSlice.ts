import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { IProducts } from "../../models/ProductsModel";

const initialState: IProducts[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<IProducts[]>) =>
      [...state, ...action.payload],
    removeProduct: (state, action: PayloadAction<IProducts>) =>
      state.filter((product: any) => product.id !== action.payload.id),
  },
});

export const { addProducts, removeProduct } = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
