import { createSlice } from "@reduxjs/toolkit";
import { getComment,
  //  getFollowers, getFollowings,
   getLike } from "../../api/reels/Reels";

export const videoReels = createSlice({
  name: "reels",
  initialState: {
    cnt: 0,
    data: [],
    user: [],
    setComment: "",
    // followingsUser: [],
    // followersUser: [],
  },
  reducers: {
    setComment: (state, action) => {
      state.setComment = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getLike.fulfilled, (state,action)=>{
      state.user=action.payload

      
   
      })

      // builder.addCase(getFollowings.fulfilled, (state, action) => {
      //   state.followingsUser = action.payload;
      //   state.isLoading = false;
      // });
      // builder.addCase(getFollowers.fulfilled, (state, action) => {
      //     state.followersUser = action.payload;
      //     state.isLoading = false;
      // });
  },

  
});


export const { setComment } = videoReels.actions;

export default videoReels.reducer;
