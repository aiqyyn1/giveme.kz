import { configureStore } from '@reduxjs/toolkit';
import authreg from '../pages/registration/lib/slice';
export const makeStore = () => {
  return configureStore({
    reducer: { auth: authreg },
  });
};
