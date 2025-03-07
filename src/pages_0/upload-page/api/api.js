import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const createItemApi = createApi({
  reducerPath: 'createItem',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseURL,
  }),
  endpoints: (builder) => ({
    createItem: builder.mutation({
      query: (formData) => ({
        url: 'item/create',
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${Cookies.get('access')}`,
        },
      }),
    }),
  }),
});

export const { useCreateItemMutation } = createItemApi;
