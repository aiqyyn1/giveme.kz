import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi= createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseURL,
  }),
  endpoints: (builder) => ({
    postOrder: builder.mutation({
      query: (data) => ({
        url: '/order/create',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});
export const { usePostOrderMutation} = orderApi;
