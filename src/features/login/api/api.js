import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApiLogin = createApi({
  reducerPath: 'authApiLogin',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseURL,
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
