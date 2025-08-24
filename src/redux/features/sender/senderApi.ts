import { baseApi } from "@/redux/baseApi";
import { IResponse, ITracking, IParcelParams, IParcelQuery,  } from "@/types";

export const senderApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    // Create parcel
    createParcel: builder.mutation({
      query: (parcelData) => ({
        url: '/parcel/send-parcel',
        method: 'POST',
        data: parcelData
      }),
      invalidatesTags: ["SENDER"]
    }),

    // Get sender all parcels 
    senderParcels: builder.query<IParcelQuery, IParcelParams>({
      query: ({ senderID, page, limit, searchTerm, currentStatus }) => ({
        url: `/parcel/sender-parcels/${senderID}`,
        method: 'GET',
        params: { page, limit, searchTerm, currentStatus }
      }),
      providesTags: ["SENDER"],
      transformResponse: (response: IResponse<IParcelQuery>) => response.data
    }),

    // Track parcel 
    trackParcel: builder.query<ITracking[], void>({
      query: (trackingID) => ({
        url: `/parcel/track-parcel/${trackingID}`,
        method: 'GET'
      }),
    }),

    // Make payment
    makePayment: builder.mutation({
      query: (parcelId: string) => ({
        url: `/payment/init-payment/${parcelId}`,
        method: 'POST',
      }),
    }),

    // Cancel parcel
    cancelParcel: builder.mutation({
      query: (parcelId: string) => ({
        url: `/parcel/cancel/${parcelId}`,
        method: 'PATCH',
      }),
    }),

  })

});
export const { useCreateParcelMutation, useSenderParcelsQuery, useTrackParcelQuery, useCancelParcelMutation, useMakePaymentMutation } = senderApi;
