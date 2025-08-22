import { baseApi } from "@/redux/baseApi";
import { IResponse, IParcel, IParcelReceive } from "@/types";


export const receiverApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    // Get sender all parcels 
    receiverParcels: builder.query<IParcel[], string>({
      query: (receiverEmail) => ({
        url: `/parcel/receiver-parcels/${receiverEmail}`,
        method: 'GET'
      }),
      providesTags: ["RECEIVER"],
      transformResponse: (response: IResponse<IParcel[]>) => response.data
    }),

    // Delivery history <IParcel[], string>
    deliveryHistory: builder.query({
      query: (receiverEmail) => ({
        url: `/parcel/delivery-history/${receiverEmail}`,
        method: 'GET'
      }),
      // transformResponse: (response: IResponse<IParcel[]>) => response.data
    }),

    // Receive parcel
    receiveParcel: builder.mutation<IResponse<IParcel>, { parcelId: string, updateData: IParcelReceive }>({
      query: ({ parcelId, updateData }) => ({
        url: `/parcel/parcel-received/${parcelId}`,
        method: 'PATCH',
        data: updateData
      }),
      invalidatesTags: ["RECEIVER"]
    }),

  })

});
export const { useReceiverParcelsQuery, useDeliveryHistoryQuery, useReceiveParcelMutation } = receiverApi;
