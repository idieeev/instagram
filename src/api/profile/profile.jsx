import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
import { Try } from "@mui/icons-material";

export const getProfileById = createAsyncThunk(
  "profile/getProfileById",
  async function (id) {
    try {
      let { data } = await axiosRequest.get(
        `UserProfile/get-user-profile-by-id?id=${id}`
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const GetPostByUser = createAsyncThunk(
  "profile/GetPostByUser",
  async function (id) {
    try {
      let { data } = await axiosRequest.get(`Post/get-posts?UserId=${id}`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getFollowings = createAsyncThunk(
  "profile/getFollowings",
  async function (id) {
    try {
      let { data } = await axiosRequest.get(
        `FollowingRelationShip/get-subscribers?UserId=${id}`
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getFollowers = createAsyncThunk(
  "profile/getFollowers",
  async function (id) {
    try {
      let { data } = await axiosRequest.get(
        `FollowingRelationShip/get-subscriptions?UserId=${id}`
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const putProfile = createAsyncThunk(
  "profile/putProfile",
  async function (user) {
     console.log(user);
    try {
      let { data } = await axiosRequest.put(
        `UserProfile/update-user-profile`,
        user
      );
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const putProfileImage = createAsyncThunk(
   "profile/putProfileImage",
   async function (image) {
     let formData = new FormData();
     formData.append("image", image);
     try {
       let { data } = await axiosRequest.put(
         `UserProfile/update-profile-photo`,
         formData
       );
     } catch (error) {
       console.log(error);
     }
   }
 );