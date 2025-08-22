import { baseApi } from "@/redux/baseApi";
import { IResponse, IParcel } from "@/types";

export const senderApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    // Get sender all parcels
    senderParcels: builder.query<IParcel[], string>({
      query: (senderID) => ({
        url: `/parcel/sender-parcels/${senderID}`,
        method: 'GET'
      }),
      // providesTags: ["SENDER"],
      transformResponse: (response: IResponse<IParcel[]>) => response.data
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
export const { useSenderParcelsQuery, useCancelParcelMutation } = senderApi;
