import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const orderApi = createApi({
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
        headers: {
          Authorization: `Bearer ${Cookies.get('access')}`,
        },
      }),
    }),
  }),
});
export const { usePostOrderMutation } = orderApi;
