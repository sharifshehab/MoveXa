import { baseApi } from "@/redux/baseApi";
import { IUser, IResponse, ILogin } from "@/types";

export const authApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    // Register user
    registerUser: builder.mutation<IResponse<IUser>, IUser>({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        data: userData,
      }),
    }),
    // Log-in user 
    loginUser: builder.mutation<IUser, Partial<IUser>>({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        data: userData,
      }),
      transformResponse: (response: IResponse<ILogin>) => response.data.user
    }),
    // Log-out user
    logOutUser: builder.mutation<IResponse<IUser>, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    // Get user data 
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
      transformResponse: (response: IResponse<IUser>) => response.data
    }),

  })
  
});
export const { useRegisterUserMutation, useLoginUserMutation, useLogOutUserMutation, useGetUserQuery } = authApi;
