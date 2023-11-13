import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  value: "",
};
export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setTokenRedux: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    deleteTokenRedux: (state) => {
      state.value = "";
    },
  },
});

export const { setTokenRedux, deleteTokenRedux } = tokenSlice.actions;

export const selectDrawer = (state: RootState) => state.drawer.showDrawer;

export default tokenSlice.reducer;
