
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie'
export const profileApi = createApi({
  reducerPath: 'profile',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://giveme-kz-backend-2.onrender.com' }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: '/user/me',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${Cookies.get('access')}`,
        },
      }),
    }),
  }),
});

export const {useGetProfileQuery} = profileApi
