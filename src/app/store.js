import { configureStore } from '@reduxjs/toolkit';
import authreg from '../pages_0/registration/lib/slice';
import token from '../pages_0/login/lib/slice';
import categories from '../features/items/lib/slice';
import { authApi } from '../pages_0/registration/api/api';
import { authApiLogin } from '../pages_0/login/api/api';
import { authForgot } from '../pages_0/forget-password/api/api';
import { authReset } from '../pages_0/reset-password/api/api';
import { itemsAPI } from '../features/items/api/api';
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authreg,
      [authApi.reducerPath]: authApi.reducer,
      token: token,
      [authApiLogin.reducerPath]: authApi.reducer,
      [authForgot.reducerPath]: authForgot.reducer,
      [authReset.reducerPath]: authReset.reducer,
      categories: categories,
      [itemsAPI.reducerPath]: itemsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        authApi.middleware,
        authApiLogin.middleware,
        authForgot.middleware,
        authReset.middleware,
        itemsAPI.middleware
      ),
  });
};
