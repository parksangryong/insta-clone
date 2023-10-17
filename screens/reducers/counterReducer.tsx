import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  name: string;
  age: number;
}

const initialState: UserState = {
  name: 'kim',
  age: 20,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    editAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  },
});

export const {editName, editAge} = userSlice.actions;

export default userSlice.reducer;
