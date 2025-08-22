import { baseApi } from "@/redux/baseApi";
import { IResponse, IUser } from "@/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // // Add data
    // createService: builder.mutation<IResService, IService>({
    //   query: (serviceData) => ({
    //     url: '/services',
    //     method: 'POST',
    //     data: serviceData,
    //   }),
    //   invalidatesTags: ['SERVICE']
    // }),

    // Get user data
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: '/user/me',
        method: 'GET',
      }),
      transformResponse: (response: IResponse<IUser>) => response.data
    }),

    /* 
    {
    "statusCode": 200,
    "success": true,
    "message": "User info Retrieved Successfully",
    "data": {
        "_id": "688e329c5dd0b8d923979de7",
        "name": "aryan",
        "email": "aryan@gmail.com",
        "password": "$2b$10$T67yoA4CCvSpon.iZ8GzGODX601i0JMYTML3jL.d0DSa7XmW.EKK2",
        "role": "Sender",
        "status": "Active",
        "createdAt": "2025-08-02T15:45:32.494Z",
        "updatedAt": "2025-08-02T16:55:55.251Z"
    }
}
    */

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
export const { useGetUserQuery } = userApi;
// export const { useGetUserQuery, useGetServiceByIdQuery, useCreateServiceMutation, useUpdateServiceMutation, useDeleteServiceMutation } = userApi;