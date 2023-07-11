import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { IProducts } from "../../models/ProductsModel";

const initialState: IProducts[] = [];

export const productsInSalesOrderSlice = createSlice({
  name: "productsInSalesOrder",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProducts>) => {
      // Si el producto ya existe en el carrito, se aumenta la cantidad
      const productIndex = state.findIndex(
        (product) => product._id === action.payload._id
      );
      if (productIndex !== -1) {
        // modifico la cantidad
        state[productIndex].quantity += action.payload.quantity;
        return;
      }
      // Si el producto no existe en el carrito, se agrega
      state.push(action.payload);
    },
    removeOneProduct: (state, action: PayloadAction<IProducts>) => {
      // Si el producto ya existe en el carrito, se disminuye la cantidad
      const productIndex = state.findIndex(
        (product) => product._id === action.payload._id
      );
      if (productIndex !== -1) {
        state[productIndex].quantity -= 1;
        if (state[productIndex].quantity <= 0) {
          state.splice(productIndex, 1);
        }
      }
    },
    removeAllItems: (state, action: PayloadAction<IProducts>) => state.filter((product) => product._id !== action.payload._id),
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
