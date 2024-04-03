import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
const initialState = {
  acessToken: '',
  refreshToken: '',
};

export const tokenSlice = createSlice({
  name: 'tokenSlice',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { token, exprireHours, cookieName } = action.payload;
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + exprireHours * 60 * 60 * 1000);
      Cookies.set(cookieName, token, {
        secure: true,
        sameSite: 'Strict',
        expires: expirationDate,
      });
    },
  },
});
export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
