import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authReset = createApi({
  reducerPath: 'authReset',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://givemekz-backend-production.up.railway.app'
  }),
  endpoints: (builder) => ({
    postReset: builder.mutation({
      query: ({ token, ...data }) => {
    
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
