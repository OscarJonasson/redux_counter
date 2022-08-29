import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    hello: 'moi',
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    decrement: (state) => {
      state.value > 0 ? (state.value -= 1) : (state.value = state.value);
    },
    decrementByAmount: (state, action) => {
      state.value >= action.payload
        ? (state.value -= action.payload)
        : (state.value = state.value);
    },
  },
});

export const {
  increment,
  incrementByAmount,
  reset,
  decrement,
  decrementByAmount,
} = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
