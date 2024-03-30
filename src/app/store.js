import { configureStore } from '@reduxjs/toolkit';
import authreg from '../pages_0/registration/lib/slice';
import token from '../pages_0/login/lib/slice';
import categories from '../features/items/lib/slice';
import uploadText from '../pages_0/upload-page/lib/slices';
import { authApi } from '../pages_0/registration/api/api';
import { authApiLogin } from '../pages_0/login/api/api';
import { authForgot } from '../pages_0/forget-password/api/api';
import { authReset } from '../pages_0/reset-password/api/api';
import { itemsAPI } from '../features/items/api/api';
import { orderApi } from '../entities/order/api/api';
import { createItemApi } from '../pages_0/upload-page/api/api';

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
      [orderApi.reducerPath]: orderApi.reducer,
      uploadText: uploadText,
      [createItemApi.reducerPath]: createItemApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredPaths: ['getText.selectedFile'],
          ignoredActions: ['getText/setSelectedFile'],
        },
      }).concat(
        authApi.middleware,
        authApiLogin.middleware,
        authForgot.middleware,
        authReset.middleware,
        itemsAPI.middleware,
        orderApi.middleware,
        createItemApi.middleware
      ),
  });
};
