import { baseApi } from "@/redux/baseApi";
import { IResponse, IParcel, IUser } from "@/types";

export const adminApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    // Get all parcels
    allParcels: builder.query<IParcel[], void>({
      query: () => ({
        url: '/parcel/all-parcels',
        method: 'GET'
      }),
      providesTags: ["ADMIN"],
      transformResponse: (response: IResponse<IParcel[]>) => response.data
    }),

    // Approve parcel
    approveParcel: builder.mutation({
      query: (parcelId: string) => ({
        url: `/parcel/approve-parcel/${parcelId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ["ADMIN"]
    }),

    // Change parcel status
    parcelStatus: builder.mutation({
      query: ({ parcelId, updateData }) => ({
        url: `/parcel/parcel-status/${parcelId}`,
        method: 'PATCH',
        data: updateData
      }),
      invalidatesTags: ["ADMIN"]
    }),

    // Get all users
    allUsers: builder.query<IUser[], void>({
      query: () => ({
        url: '/user/all-users',
        method: 'GET'
      }),
      providesTags: ["ADMIN"],
      transformResponse: (response: IResponse<IUser[]>) => response.data
    }),

    // Change user status
    userStatus: builder.mutation({
      query: ({ userId, updateData }) => ({
        url: `/user/change-status/${userId}`,
        method: 'PATCH',
        data: updateData
      }),
      invalidatesTags: ["ADMIN"]
    }),

    // Assign admin
    assignAdmin: builder.mutation({
      query: (userId: string) => ({
        url: `/user/assign-admin/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ["ADMIN"]
    }),

  })

});
export const { useAllParcelsQuery, useApproveParcelMutation, useParcelStatusMutation, useAllUsersQuery, useUserStatusMutation, useAssignAdminMutation } = adminApi;
