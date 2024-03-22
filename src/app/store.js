import { configureStore } from '@reduxjs/toolkit';
import authreg from '../pages_0/registration/lib/slice';
import token from '../pages_0/login/lib/slice';
import { authApi } from '../pages_0/registration/api/api';
import { authApiLogin } from '../pages_0/login/api/api';
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authreg,
      [authApi.reducerPath]: authApi.reducer,
      token: token,
      [authApiLogin.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, authApiLogin.middleware),
  });
};
