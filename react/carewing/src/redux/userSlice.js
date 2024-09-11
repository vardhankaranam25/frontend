

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userId: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { loginUser} = userSlice.actions;

export default userSlice.reducer;
