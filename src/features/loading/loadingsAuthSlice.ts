import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  isLoadingLogin: false,
  isLoadingRegister: false,
};

export const loadingAuthSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setIsLoadingLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoadingLogin = action.payload;
    },
    setIsLoadingRegister: (state, action: PayloadAction<boolean>) => {
      state.isLoadingRegister = action.payload;
    },
  },
});

export const { setIsLoadingLogin, setIsLoadingRegister } =
  loadingAuthSlice.actions;

export const selectDrawer = (state: RootState) => state.drawer.showDrawer;

export default loadingAuthSlice.reducer;
