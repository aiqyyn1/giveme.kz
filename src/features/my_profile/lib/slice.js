import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoading: false,
  needer_status: '',
  text: '',
};

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setNeederStatus: (state, action) => {
      state.needer_status = action.payload;
    },
    setTextToCopy: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setIsLoading, setNeederStatus, setTextToCopy } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
