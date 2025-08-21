import { baseApi } from "@/redux/baseApi";
import { IUser, IResponse } from "@/types";

export const userApi = baseApi.injectEndpoints({


  endpoints: (builder) => ({
    // Register user
    registerUser: builder.mutation<IResponse<IUser>, IUser>({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        data: userData,
      }),
    }),

    // Login user
    loginUser: builder.mutation<IResponse<IUser>, Partial<IUser>>({
      query: (userData) => ({
        url: '/auth/login',
        method: 'POST',
        data: userData,
      }),
      invalidatesTags: ['USER'],
    }),
    // // Get data by-id
    // getServiceById: builder.query<IResService, string>({
    //   query: (serviceID) => ({
    //     url: `/service/${serviceID}`,
    //     method: 'GET'
    //   }),
    // }),

    // // Update data
    // updateService: builder.mutation<IResService, { serviceID: string, updateData: Partial<IService> }>({
    //   query: ({ serviceID, updateData }) => ({
    //     url: `/update-service/${serviceID}`,
    //     method: 'PATCH',
    //     body: updateData,
    //   }),
    // }),

    // // Delete book
    // deleteService: builder.mutation<IResService, string>({
    //   query: (serviceID) => ({
    //     url: `/delete-services/${serviceID}`,
    //     method: 'DELETE',
    //   }),
    // }),

  })

});
export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
// export const { useGetAllServicesQuery, useGetServiceByIdQuery, useregisterUserMutation, useUpdateServiceMutation, useDeleteServiceMutation } = userApi;