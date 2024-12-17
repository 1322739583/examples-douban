import { getHomeGoodPriceData } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
  const res = getHomeGoodPriceData();
  console.log(res);
  return res;
});

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {
      list: [],
    },
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      state.goodPriceInfo = payload;
    },
    [fetchHomeDataAction.rejected](state, action) {
      // console.log(state, action);
      state.loading = false;
      state.error = action.error.message || "Failed to fetch data";
    },
    [fetchHomeDataAction.pending](state) {
      console.log(state);
    },
  },
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;
