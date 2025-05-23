import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
export const changePassApi = createApi({
  reducerPath: 'changePass',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://givemekz-backend-production.up.railway.app',
  }),
  endpoints: (builder) => ({
    postChangePass: builder.mutation({
      query: (data) => ({
        url: '/user/change_password',
        body: data,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${Cookies.get('access')}`,
        },
      }),
    }),
  }),
});
export const {usePostChangePassMutation} = changePassApi;
