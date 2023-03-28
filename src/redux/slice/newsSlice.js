import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
  minPrice: null,
  maxPrice: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    STORE_NEWS(state, action) {
      //   console.log(action.payload);
      state.news = action.payload.news;
    },
    GET_PRICE_RANGE(state, action) {
      const { news } = action.payload;
      const array = [];
      news.map((news) => {
        const price = news.price;
        return array.push(price);
      });
      const max = Math.max(...array);
      const min = Math.min(...array);
      state.minPrice = min;
      state.maxPrice = max;
    },
  },
});

export const { STORE_NEWS, GET_PRICE_RANGE } = newsSlice.actions;

export const selectNews = (state) => state.news.news;
export const selectMinPrice = (state) => state.news.minPrice;
export const selectMaxPrice = (state) => state.news.maxPrice;

export default newsSlice.reducer;
