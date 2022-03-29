import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
  displayName: '',
  email: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.displayName = action.payload.displayName;
    },
  },
});

export const { updateUserData } = authSlice.actions;
export default authSlice.reducer;
