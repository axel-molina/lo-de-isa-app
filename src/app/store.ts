import { configureStore } from "@reduxjs/toolkit";
import {
  productsInSalesOrderSlice,
  productSlice,
  userDataSlice,
  drawerSlice,
  tokenSlice,
} from "../features";

export const store = configureStore({
  reducer: {
    productosEnOrdenDeVenta: productsInSalesOrderSlice,
    products: productSlice,
    userData: userDataSlice,
    drawer: drawerSlice,
    token: tokenSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
