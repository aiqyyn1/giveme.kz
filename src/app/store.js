import { configureStore } from '@reduxjs/toolkit';
import authreg from '../features/registration/lib/slice';
import token from '../features/login/lib/slice';
import categories from '../features/items/lib/slice';
import uploadText from '../pages_0/upload-page/lib/slices';
import calculator from '../features/ calculator/lib/slice';
import { authApi } from '../features/registration/api/api';
import { authApiLogin } from '../features/login/api/api';
import { authForgot } from '../pages_0/forget-password/api/api';
import { authReset } from '../features/reset-password/api/api';
import { itemsAPI } from '../features/items/api/api';
import { orderApi } from '../entities/order/api/api';
import { createItemApi } from '../pages_0/upload-page/api/api';
import { profileApi } from '../features/my_profile/api/api';
import isLoading from '../features/my_profile/lib/slice';

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
      calculator: calculator,
      [profileApi.reducerPath]: profileApi.reducer,
      isLoading: isLoading,
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
        createItemApi.middleware,
        profileApi.middleware
      ),
  });
};
