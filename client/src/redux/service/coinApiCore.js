import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const coinApiCore = createApi({
    reducerPath: "coinApiCore",
    baseQuery : fetchBaseQuery({
        baseUrl: "https://api.coingecko.com/api/v3"
    }),
    endpoints: (builder) => ({
        getTopCoins: builder.query({query: () => "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false"})
    })
})

export const {
    useGetTopCoins,
 } = coinApiCore