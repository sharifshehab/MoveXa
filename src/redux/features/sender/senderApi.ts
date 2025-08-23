import { baseApi } from "@/redux/baseApi";
import { IResponse, IParcel } from "@/types";

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
    senderParcels: builder.query<IParcel[], string>({
      query: (senderID) => ({
        url: `/parcel/sender-parcels/${senderID}`,
        method: 'GET'
      }),
      providesTags: ["SENDER"],
      transformResponse: (response: IResponse<IParcel[]>) => response.data
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
export const { useCreateParcelMutation, useSenderParcelsQuery, useCancelParcelMutation, useMakePaymentMutation } = senderApi;
