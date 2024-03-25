import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const itemsAPI = createApi({
  reducerPath: 'itemsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://giveme-backend-2.onrender.com/',
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
  }),
  refetchOnMountOrArgChange: 10,
});
export const { useGetItemsQuery } = itemsAPI;
