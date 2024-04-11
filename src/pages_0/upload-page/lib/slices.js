import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  selectedFile: null,
  categoryId: 0,
  isActive :0
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
    setIsActive : (state, action) => {
      state.isActive = action.payload
    }
  },
});
export const { setText, setSelectedFile, setCategoryId, setIsActive } = createItemSlice.actions;
export default createItemSlice.reducer;
