import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { Products } from "../../models/Products/Products.model";

const initialState: Products[] = [];

export const productsInSalesOrderSlice = createSlice({
  name: "productsInSalesOrder",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Products>) => {
      // Si el producto ya existe en el carrito, se aumenta la cantidad
      const productIndex = state.findIndex(
        (product) => product._id === action.payload._id
      );
      if (productIndex !== -1) {
        // modifico la cantidad
        state[productIndex].stock += action.payload.stock;
        return;
      }
      // Si el producto no existe en el carrito, se agrega
      state.push(action.payload);
    },
    removeOneProduct: (state, action: PayloadAction<Products>) => {
      // Si el producto ya existe en el carrito, se disminuye la cantidad
      const productIndex = state.findIndex(
        (product) => product._id === action.payload._id
      );
      if (productIndex !== -1) {
        state[productIndex].stock -= 1;
        if (state[productIndex].stock <= 0) {
          state.splice(productIndex, 1);
        }
      }
    },
    removeAllItems: (state, action: PayloadAction<Products>) =>
      state.filter((product) => product._id !== action.payload._id),
    clearCart: (state, action) => {
      // eslint-disable-next-line no-unused-expressions
      action.payload;
      return (state = []);
    },
  },
});

export const { addProduct, removeOneProduct, removeAllItems, clearCart } =
  productsInSalesOrderSlice.actions;

export const selectProductsInSalesOrder = (state: RootState) =>
  state.productosEnOrdenDeVenta;

export default productsInSalesOrderSlice.reducer;
