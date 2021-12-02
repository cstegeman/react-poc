import { createSlice } from '@reduxjs/toolkit';

export const reverseSlice = createSlice({
  name: 'reverse',
  initialState: {
    value: false
  },
  reducers: {
    reversePlayback: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { reversePlayback } = reverseSlice.actions;

export default reverseSlice.reducer;
