import { baseApi } from "@/redux/baseApi";
import { IResponse, IUser } from "@/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({


    // Get user data ( trans fer this ti the "auth")
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
      transformResponse: (response: IResponse<IUser>) => response.data
    }),


  })

});
export const { useGetUserQuery } = userApi;