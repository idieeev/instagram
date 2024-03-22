import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

let idx = null;

export const getComment = createAsyncThunk("reels/getComment", async () => {
  try {
    const { data } = await axiosRequest.get("Post/get-reels");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const postComment = createAsyncThunk(
  "reels/postComment",
  async function (e, { dispatch }) {
    try {
      const { data } = await axiosRequest.post("Post/add-comment", {
        comment: e.comment,
        postId: e.postId,
      });

      dispatch(getComment(idx));
    } catch (error) {
      console.error(error);
    }
  }
);

export const getLike = createAsyncThunk(
  "Post/getLike",
  async (userId, { dispatch }) => {
    try {
      let { data } = await axiosRequest.post(`Post/like-post?postId=${userId}`);
      console.log(userId, "The like is work");
      dispatch(getComment(userId));
    } catch (error) {
      console.error(error);
    }
  }
);

export const postSave = createAsyncThunk(
  "Post/postSave",
  async (id, { dispatch }) => {
    try {

      let { data } = await axiosRequest.post(`Post/add-post-favorite`, {
        postId: id,
      });
    } catch (error) {
      console.log(error);
    }
  }
);


// export const getFollowings = createAsyncThunk(
//   "profile/getFollowings",
//   async function (id) {
//     try {
//       let { data } = await axiosRequest.get(
//         `FollowingRelationShip/get-subscribers?UserId=${id}`
//       );
//       return data.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// export const getFollowers = createAsyncThunk(
//   "profile/getFollowers",
//   async function (id) {
//     try {
//       let { data } = await axiosRequest.get(
//         `FollowingRelationShip/get-subscriptions?UserId=${id}`
//       );
//       return data.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

