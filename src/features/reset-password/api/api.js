import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authReset = createApi({
  reducerPath: 'authReset',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.baseURL,
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
