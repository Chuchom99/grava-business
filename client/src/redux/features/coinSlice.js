import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';


const marketUrl = "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false";
const trendingUrl = "/search/trending";



const initialState = {
  coin: [],
  trending: [],
  isLoading: true,
};

// export const getCoinInfo = createAsyncThunk("info/getCoinInfo ", async () =>{
//   try {
//     const rsp = await axios(coinInfoUrl)
//   } catch (error) {
//     console.log(error);
//   }
// })

export const getTrendingCoin = createAsyncThunk("trnding/getCoinItem", async () => {
  try {
    const rsp = await axios(trendingUrl)
    return rsp.data
  } catch (error) {
    console.log(error);
  }
}); 

export const getCoinItems = createAsyncThunk("coin/getCoinItem", async () => {
  try {
    const resp = await axios(marketUrl)
    return resp.data
} catch (error) {
   console.log(error); 
}
});

const coinSlice = createSlice({
    name: "coin",
    initialState,
    // reducers: {
    //     updateCoin: (state, action) => {
    //       state.coins = action.payload
    //     },
    //   },
      extraReducers: {
        [getCoinItems.pending]: (state) => {
          //  state.isLoading = true
        },
        [getCoinItems.fulfilled]: (state, action) => {
          state.isLoading = false
          state.coin = action.payload
        },
        [getCoinItems.rejected]: (state) => {
          state.isLoading = false
        }, 
        [getTrendingCoin.fulfilled]: (state,action) => {
          console.log(action);
          state.trending = action.payload
        },
        
      }
})

export const {updateCoin} = coinSlice.actions
export default coinSlice.reducer

