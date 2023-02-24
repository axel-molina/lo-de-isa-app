import { configureStore } from '@reduxjs/toolkit';
import { productsInSalesOrderSlice, productSlice, userDataSlice, drawerSlice } from '../features';

export const store = configureStore({
  reducer: {
    productosEnOrdenDeVenta: productsInSalesOrderSlice,
    productos: productSlice,
    userData: userDataSlice,
    drawer: drawerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
