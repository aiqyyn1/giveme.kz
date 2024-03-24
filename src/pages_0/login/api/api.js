import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApiLogin = createApi({
  reducerPath: 'authApiLogin',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://giveme-kz-backend.onrender.com',
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation({
      query: (data) => ({
        url: '/user/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});
export const { usePostLoginMutation } = authApiLogin;
