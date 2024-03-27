import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authForgot = createApi({
  reducerPath: 'authForgot',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseURL,
  }),
  endpoints: (builder) => ({
    postForgot: builder.mutation({
      query: (data) => ({
        url: '/user/forget_password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});
export const { usePostForgotMutation } = authForgot;
