import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { IUserData } from "../../models/UserModel";

const initialState: IUserData = {
  _id: "",
  bank: 0,
  email: "",
  avatar: "",
  name: "",
  lastName: "",
  createdAt: "",
  updatedAt: "",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state._id = action.payload._id;
      state.bank = action.payload.bank;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
    },
    editBank: (state, action: PayloadAction<number>) => {
      state.bank = action.payload;
    },
  },
});

export const { editBank, setUser } = userDataSlice.actions;

export const selectUserData = (state: RootState) => state.userData;

export default userDataSlice.reducer;
