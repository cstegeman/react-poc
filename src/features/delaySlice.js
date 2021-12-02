import { createSlice } from '@reduxjs/toolkit';

export const delaySlice = createSlice({
  name: 'delay',
  initialState: {
    value: false
  },
  reducers: {
    enableDelay: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { enableDelay } = delaySlice.actions;

export default delaySlice.reducer;
