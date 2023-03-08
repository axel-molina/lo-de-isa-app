import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PayloadAction } from '@reduxjs/toolkit';

import { IUserData } from '../../models/UserModel';

const initialState: IUserData = 
    {
        id: 0,
        name: '',
        lastname: '',
        avatar: '',
        email: '',
        number: '',
        businessName: '',
        bank: 0
    }
;

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.lastname = action.payload.lastname;
        state.avatar = action.payload.avatar;
        state.email = action.payload.email;
        state.number = action.payload.number;
        state.businessName = action.payload.businessName;
        state.bank = action.payload.bank;
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
