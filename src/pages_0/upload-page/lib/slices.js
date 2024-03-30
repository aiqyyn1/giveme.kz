import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  selectedFile: null,
  categoryId: 0,
};

const createItemSlice = createSlice({
  name: 'getText',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setSelectedFile: (state, action) => {
      state.selectedFile = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});
export const { setText, setSelectedFile, setCategoryId } = createItemSlice.actions;
export default createItemSlice.reducer;
