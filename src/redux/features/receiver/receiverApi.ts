import { baseApi } from "@/redux/baseApi";
import { IResponse, IParcel, IParcelReceive, IParcelParams, IParcelQuery } from "@/types";


export const receiverApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    // Get receiver all parcels 
    receiverParcels: builder.query<IParcelQuery, Partial<IParcelParams>>({
      query: ({ receiverEmail, page, limit, searchTerm, currentStatus }) => ({
        url: `/parcel/receiver-parcels/${receiverEmail}`,
        method: 'GET',
        params: { page, limit, searchTerm, currentStatus }
      }),
      providesTags: ["RECEIVER"],
      transformResponse: (response: IResponse<IParcelQuery>) => response.data
    }),

    // Delivery history <IParcel[], string>
    deliveryHistory: builder.query({
      query: (receiverEmail) => ({
        url: `/parcel/delivery-history/${receiverEmail}`,
        method: 'GET'
      }),
      // transformResponse: (response: IResponse<IParcel[]>) => response.data
    }),

    // Receive/Return parcel
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
