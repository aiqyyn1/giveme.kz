import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const authRegSlice = createSlice({
  name: 'regSlice',
  initialState,
  reducers: {
    setData: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});
export const { setData } = authRegSlice.actions;
export default authRegSlice.reducer;
