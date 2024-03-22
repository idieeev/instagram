import { createSlice } from "@reduxjs/toolkit";
import {
  getExplore,
  getExploreReels,
  getPostById,
  postLike,
} from "../../api/ExploreApi/ExploreApi";

export const Explore = createSlice({
  name: "explore",
  initialState: {
    data: [],
    Comments: "",
    ById: [],
    postLike: [],
    loading: false,
  },
  reducers: {
    setComment: (state, action) => {
      state.Comments = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getExplore.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getExplore.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getExplore.rejected, (state, action) => {
      state.loading.false;
    });
    builder.addCase(getExploreReels.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getPostById.fulfilled, (state, action) => {
      state.ById = action.payload;
    });
  },
});
export const { setComment } = Explore.actions;

export default Explore.reducer;
