import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export const getExplore = createAsyncThunk("explore/getExplore", async () => {
  try {
    const { data } = await axiosRequest.get("Post/get-posts");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

let idx = null;
export const getPostById = createAsyncThunk(
  "explore/getPostById",
  async (id) => {
    try {
      let { data } = await axiosRequest.get(`Post/get-post-by-id?id=${id}`);
      // console.log(data.data);
      idx = id;
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getExploreReels = createAsyncThunk(
  "explore/getExploreReels",
  async () => {
    try {
      const { data } = await axiosRequest.get("Post/get-reels");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const postComment = createAsyncThunk(
  "explore/postComment",
  async (newComment, { dispatch }) => {
    try {
      const { data } = await axiosRequest.post("Post/add-comment", {
        // dateAdd: new Date().toLocaleString(),
        comment: newComment.comment,
        postId: newComment.postId,
      });
      dispatch(getPostById(idx));
    } catch (error) {
      console.error(error);
    }
  }
);

export const postLike = createAsyncThunk(
  "explore/postLike",
  async (id, { dispatch }) => {
    try {
      const { data } = await axiosRequest.post(`Post/like-post?postId=${id}`);
      dispatch(getPostById(idx));
    } catch (error) {
      console.error(error);
    }
  }
);


// export const getById = createAsyncThunk("explore/getById", async (id) => {
//   try {
//     let { data } = await axiosRequest.get(
//       `UserProfile/get-user-profile-by-id?id=${id}`
//     );
//     return data.data;
//   } catch (error) {
//     console.error(error);
//   }
// });
