import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  isLoadingProducts: false,
  isLoadingPostProduct: false,
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
  },
});

export const { setIsLoadingProducts, setIsLoadingPostProduct } =
  loadingProductSlice.actions;

export const selectDrawer = (state: RootState) => state.drawer.showDrawer;

export default loadingProductSlice.reducer;
