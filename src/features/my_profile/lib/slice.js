import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoading: false,
  needer_status:''
};

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setNeederStatus : (state, action) => {
      state.needer_status = action.payload
    }
  
  },
});

export const { setIsLoading, setNeederStatus} = isLoadingSlice.actions;
export default isLoadingSlice.reducer;
