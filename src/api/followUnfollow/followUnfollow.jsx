import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";


export const followingByID = createAsyncThunk("todo/followingByID", async (a) => {
    try {
        let { data } = await axiosRequest.get(`FollowingRelationShip/get-subscribers?UserId=${a}`);
// console.log(data);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  });


  
export const unFollowingByID = createAsyncThunk("todo/unfollowingByID", async (a) => {
    try {
        let { data } = await axiosRequest.delete(`FollowingRelationShip/delete-following-relation-ship?id=${a}`);
        
// console.log(data);
    //   return data.data;
    } catch (error) {
      console.error(error);
    }
  });



  export const getFollowersIiid = createAsyncThunk(
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