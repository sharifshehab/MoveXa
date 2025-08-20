import { baseApi } from "@/redux/baseApi";
import { IResponse, ITourPackage } from "@/types";

export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add data
    createService: builder.mutation<IResService, IService>({
      query: (serviceData) => ({
        url: '/services',
        method: 'POST',
        data: serviceData,
      }),
      invalidatesTags: ['SERVICE']
    }),
    // Get all data
    getAllServices: builder.query<IResService[], void>({
      query: (params) => ({
        url: '/services',
        method: 'GET',
        params: params,
      }),
      providesTags: ['SERVICE'],
      transformResponse: (response: IResponse<ITourPackage[]>) => response.data,
    }),
    // Get data by-id
    getServiceById: builder.query<IResService, string>({
      query: (serviceID) => ({
        url: `/service/${serviceID}`,
        method: 'GET'
      }),
    }),

    // Update data
    updateService: builder.mutation<IResService, { serviceID: string, updateData: Partial<IService> }>({
      query: ({ serviceID, updateData }) => ({
        url: `/update-service/${serviceID}`,
        method: 'PATCH',
        body: updateData,
      }),
    }),

    // Delete book
    deleteService: builder.mutation<IResService, string>({
      query: (serviceID) => ({
        url: `/delete-services/${serviceID}`,
        method: 'DELETE',
      }),
    }),

  })

});
export const { useGetAllServicesQuery, useGetServiceByIdQuery, useCreateServiceMutation, useUpdateServiceMutation, useDeleteServiceMutation } = serviceApi;