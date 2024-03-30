
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie'
export const createItemApi = createApi({
  reducerPath: 'createItem',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://giveme-kz-backend-2.onrender.com' }),
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

export const { useCreateItemMutation } = createItemApi
