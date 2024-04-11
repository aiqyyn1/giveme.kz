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
      console.log(text)
      if (text === 'CLOTHES') {
        state.sum = parseInt(weight) * 1800;
      } else if (text === 'SHOES') {
        state.sum = parseInt(weight) * 1900;
      } else if (text === 'TOYS') {
        state.sum = parseInt(weight) * 1700;
      }
    },
  },
});

export const { setWeight, setSum } = calculatorSlice.actions;
export default calculatorSlice.reducer;
