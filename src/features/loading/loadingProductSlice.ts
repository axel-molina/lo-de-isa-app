import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  isLoadingProducts: false,
  isLoadingPostProduct: false,
  isLoadingEditProduct: false,
  isLoadingDeleteProduct: false,
};

export const loadingProductSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoadingProducts: (state, action: PayloadAction<boolean>) => {
      state.isLoadingProducts = action.payload;
    },
    setIsLoadingPostProduct: (state, action: PayloadAction<boolean>) => {
      state.isLoadingPostProduct = action.payload;
    },
    setIsLoadingEditProduct: (state, action: PayloadAction<boolean>) => {
      state.isLoadingEditProduct = action.payload;
    },
    setIsLoadingDeleteProduct: (state, action: PayloadAction<boolean>) => {
      state.isLoadingDeleteProduct = action.payload;
    },
  },
});

export const {
  setIsLoadingProducts,
  setIsLoadingEditProduct,
  setIsLoadingPostProduct,
  setIsLoadingDeleteProduct,
} = loadingProductSlice.actions;

export const selectDrawer = (state: RootState) => state.drawer.showDrawer;

export default loadingProductSlice.reducer;
