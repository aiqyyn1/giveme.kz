import { createSlice } from '@reduxjs/toolkit';
import { useRouter } from 'next/navigation';

const initialState = {
  categories: [],
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
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
