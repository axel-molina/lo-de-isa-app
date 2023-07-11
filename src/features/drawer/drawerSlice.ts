import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  showDrawer: false,
};
export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    showDrawer: (state, action: PayloadAction<boolean>) => {
      state.showDrawer = action.payload;
    },
  },
});

export const { showDrawer } = drawerSlice.actions;

export const selectDrawer = (state: RootState) => state.drawer.showDrawer;

export default drawerSlice.reducer;
