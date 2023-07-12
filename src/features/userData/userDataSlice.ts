import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { IUserData } from "../../models/UserModel";

const initialState: IUserData = {
  bank: 0,
  collectionId: "",
  collectionName: "",
  created: "",
  email: "",
  emailVisibility: false,
  avatar: "",
  id: "",
  lastName: "",
  name: "",
  updated: "",
  username: "",
  verified: false,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.bank = action.payload.bank;
      state.collectionId = action.payload.collectionId;
      state.collectionName = action.payload.collectionName;
      state.created = action.payload.created;
      state.email = action.payload.email;
      state.emailVisibility = action.payload.emailVisibility;
      state.avatar = action.payload.avatar;
      state.id = action.payload.id;
      state.lastName = action.payload.lastName;
      state.name = action.payload.name;
      state.updated = action.payload.updated;
      state.username = action.payload.username;
      state.verified = action.payload.verified;
    },
    editBank: (state, action: PayloadAction<number>) => {
      state.bank = action.payload;
    }
  },
});

export const { editBank, setUser } =
userDataSlice.actions;

export const selectUserData = (state: RootState) =>
  state.userData;

export default userDataSlice.reducer;
