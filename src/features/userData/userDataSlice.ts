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
    editBank: (state, action: PayloadAction<number>) => {
        state.bank = action.payload;
    }
    },
});

export const { editBank } =
userDataSlice.actions;

export const selectUserData = (state: RootState) =>
  state.userData;

export default userDataSlice.reducer;
