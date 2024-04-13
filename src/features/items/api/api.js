import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const itemsAPI = createApi({
  reducerPath: 'itemsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseURL,
  }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: (state) => {
        const queryParams = state.map((cat) => `cat=${cat}`).join('&');
        return {
          url: `/items${queryParams ? `?${queryParams}` : ''}`,
        };
      },
    }),
    getMyItems: builder.query({
      query: () => ({
        url: '/items/my_items',
        headers: {
          Authorization: `Bearer ${Cookies.get('access')}`,
        },
      }),
    }),
  }),
  refetchOnMountOrArgChange: 10,
});
export const { useGetItemsQuery , useGetMyItemsQuery} = itemsAPI;
