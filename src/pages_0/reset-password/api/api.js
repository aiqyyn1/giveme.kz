import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authReset = createApi({
  reducerPath: 'authReset',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://giveme-kz-backend.onrender.com',
  }),
  endpoints: (builder) => ({
    postReset: builder.mutation({
      query: ({ token, ...data }) => {
        console.log('Token:', token);
        console.log('Data:', data);
        return {
          url: '/user/reset_password',
          method: 'POST',
          body: data,
          headers: {
            token: token,
          },
        };
      },
    }),
  }),
});
export const { usePostResetMutation } = authReset;