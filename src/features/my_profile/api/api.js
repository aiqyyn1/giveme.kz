import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const profileApi = createApi({
  reducerPath: 'profile',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseURL,
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: '/me',
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
