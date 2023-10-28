import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import {
  tokenSlice,
  drawerSlice,
  productSlice,
  userDataSlice,
  productsInSalesOrderSlice,
  loadingAuthSlice,
  loadingProductSlice,
} from "../features";

export const store = configureStore({
  // Añadir al barrel antes de importar el slice
  reducer: {
    productosEnOrdenDeVenta: productsInSalesOrderSlice,
    products: productSlice,
    userData: userDataSlice,
    drawer: drawerSlice,
    token: tokenSlice,
    loadingAuth: loadingAuthSlice,
    loadingProduct: loadingProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, any>;
