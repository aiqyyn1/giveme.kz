import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://givemekz-backend-production.up.railway.app',
  }),
  endpoints: (builder) => ({
    postRegister: builder.mutation({
      query: (data) => ({
        url: '/user/signup',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});
console.log(process.env.baseURL, 'process.env.baseURL')
export const { usePostRegisterMutation } = authApi;
