import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authForgot = createApi({
  reducerPath: 'authForgot',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://givemekz-backend-production.up.railway.app'
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
