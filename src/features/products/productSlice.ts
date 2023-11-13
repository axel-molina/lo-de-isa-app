import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Pagination } from "../../models/Products/Pagination.model";

import { Products } from "../../models/Products/Products.model";
import { DataProducts } from "../../models/Products/DataProducts.model";

const initialState: DataProducts = {
  pagination: { page: 0, limit: 0, totalProducts: 0 },
  products: [] as Products[],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Products[]>) => {
      state.products = action.payload;
    },
    addPagination: (state, action: PayloadAction<Pagination>) => {
      state.pagination = action.payload;
    },
    removeProduct: (state, action: PayloadAction<Products>) => {
      state.products = state.products.filter(
        (product: Products) => product._id !== action.payload._id
      );
    },
  },
});

export const { addProducts, addPagination, removeProduct } =
  productsSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
