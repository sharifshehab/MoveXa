import { baseApi } from "@/redux/baseApi";
import { IParcelStats, IPaymentStats, IResponse, IUserStats } from "@/types";


export const statsApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    // Parcel stats
    parcelStats: builder.query<IParcelStats, void>({
      query: () => ({
        url: '/stats/parcels',
        method: 'GET',
      }),
      transformResponse: (response: IResponse<IParcelStats>) => response.data
    }),
    // User stats
    userStats: builder.query<IUserStats, void>({
      query: () => ({
        url: '/stats/users',
        method: 'GET',
      }),
      transformResponse: (response: IResponse<IUserStats>) => response.data
    }),
    // Payment stats
    paymentStats: builder.query<IPaymentStats, void>({
      query: () => ({
        url: '/stats/payments',
        method: 'GET',
      }),
      transformResponse: (response: IResponse<IPaymentStats>) => response.data
    }),

  })

});
export const { useParcelStatsQuery, useUserStatsQuery, usePaymentStatsQuery } = statsApi;
