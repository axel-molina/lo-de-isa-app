import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../features/products/productSlice';
import productsInSalesOrderSlice from '../features/productsInSalesOrder/productsInSalesOrderSlice';
import userDataSlice from '../features/userData/userDataSlice';

export const store = configureStore({
  reducer: {
    productosEnOrdenDeVenta: productsInSalesOrderSlice,
    productos: productsSlice,
    userData: userDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
