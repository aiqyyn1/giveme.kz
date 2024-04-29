import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weight: '',
  sum: 1,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
    setSum: (state, action) => {
      const { weight, text } = action.payload;
      if (text === 'CLOTHES') {
        state.sum = parseInt(weight) * 0.18;
      } else if (text === 'SHOES') {
        state.sum = parseInt(weight) * 0.19;
      } else if (text === 'TOYS') {
        state.sum = parseInt(weight) * 0.17;
      }
    },
  },
});

export const { setWeight, setSum } = calculatorSlice.actions;
export default calculatorSlice.reducer;
