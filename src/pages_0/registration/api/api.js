import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://giveme-kz-backend.onrender.com',
  }),
  endpoints: (builder) => ({
    postRegister: builder.mutation({
      query:(data) => ({
        url:'/user/signup',
        method:'POST',
        body:data
      })
    })
  })
});
export const {usePostRegisterMutation} = authApi