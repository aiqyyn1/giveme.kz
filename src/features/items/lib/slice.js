import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: false,
  timer: 0,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      const updatedCategories = [...state.categories];
      const categoryIndex = updatedCategories.indexOf(action.payload);
      if (categoryIndex !== -1) {
        updatedCategories.splice(categoryIndex, 1);
      } else {
        updatedCategories.push(action.payload);
      }

      state.categories = updatedCategories;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export const { setCategories, setStatus, setTimer } = categoriesSlice.actions;
export default categoriesSlice.reducer;
