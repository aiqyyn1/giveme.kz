import { configureStore } from '@reduxjs/toolkit';
import authreg from '../pages/registration/lib/slice';
import { authApi } from '../pages/registration/api/api';
export const makeStore = () => {
  return configureStore({
    reducer: { auth: authreg, [authApi.reducerPath]: authApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
  });
};
