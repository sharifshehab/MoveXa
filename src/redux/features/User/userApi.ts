import { baseApi } from "@/redux/baseApi";
import { IResponse } from "@/types";

export interface User {
  name: string
  email: string
  password: string
  role: string
  status: string
  _id: string
  createdAt: string
  updatedAt: string
}

export const userApi = baseApi.injectEndpoints({


  endpoints: (builder) => ({
    // Add data
    registerUser: builder.mutation<IResponse<User>, Partial<User>>({
      query: (userData) => ({
        url: '/user/register',
        method: 'POST',
        data: userData,
      }),
      invalidatesTags: ['USER']
    }),
    // <IResService, IService>

    // // Get all data
    // getAllServices: builder.query<IResService[], void>({
    //   query: (params) => ({
    //     url: '/services',
    //     method: 'GET',
    //     params: params,
    //   }),
    //   providesTags: ['SERVICE'],
    //   transformResponse: (response: IResponse<ITourPackage[]>) => response.data,
    // }),
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
export const { useRegisterUserMutation } = userApi;
// export const { useGetAllServicesQuery, useGetServiceByIdQuery, useregisterUserMutation, useUpdateServiceMutation, useDeleteServiceMutation } = userApi;