import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const profileApi = createApi({
  reducerPath: 'profile',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://givemekz-backend-production.up.railway.app',
  }),
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
    needFiles: builder.mutation({
      query: (formData) => ({
        url: '/needer_files/upload',
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${Cookies.get('access')}`,
        },
      }),
    }),
  }),
});

export const { useGetProfileQuery, useNeedFilesMutation } = profileApi;
