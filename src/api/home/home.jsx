import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";


export const getTodosByPost12 = createAsyncThunk("todo/getTodosById", async () => {
    try {
        let { data } = await axiosRequest.get(`Post/get-posts?PageSize=${15}`);
// console.log(data);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  });


  export const getHistory = createAsyncThunk("todo/getHistory", async () => {
    try {
        let { data } = await axiosRequest.get(`Story/get-stories`);
// console.log(data);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  });




  export const getTodosUser = createAsyncThunk("todo/getTodosUser", async (userId) => {
    try {
        let { data } = await axiosRequest.get(`Post/get-following-post?UserId=${userId}`);

      return data.data;
    } catch (error) {
      console.error(error);
    }
  });

  export const getAllUser = createAsyncThunk(`todo/userdd`, async (userId=13) => {
    try {
        let { data } = await axiosRequest.get(`User/get-users?PageSize=${userId}`);

      return data.data;
    } catch (error) {
      console.error(error);
    }
  });

  export const getUserAbout = createAsyncThunk("todo/getUserAbout", async (userId) => {
    try {
        let { data } = await axiosRequest.get(`UserProfile/get-user-profile-by-id?id=${userId}`);

      return data;
    } catch (error) {
      console.error(error);
    }
  });


  export const getLike = createAsyncThunk("todo/getLike", async (userId) => {
    try {
        let { data } = await axiosRequest.post(`Post/like-post?postId=${userId}`);
         console.log(userId);
      // return data;
    } catch (error) {
      console.error(error);
    }
  });


  export const getFollow = createAsyncThunk("todo/getFollow", async (userId) => {
    try {
        let { data } = await axiosRequest.post(`FollowingRelationShip/add-following-relation-ship?followingUserId=${userId}`);
         console.log(userId);
      // return data;
    } catch (error) {
      console.error(error);
    }
  });



  export const getSav = createAsyncThunk("todo/getSav", async (userId) => {
    try {
        let { data } = await axiosRequest.post(`Post/add-post-favorite`,userId);
         console.log(userId);
         console.log(data);
      // return data;
    } catch (error) {
      console.error(error);
    }
  });

  export const addCommentFromUser = createAsyncThunk("todo/addCommentFromUser", async (userId) => {
    try {
        let { data } = await axiosRequest.post(`Post/add-comment`,userId);
         console.log(userId);
         console.log(data);
        
      // return data;
    } catch (error) {
      console.error(error);
    }
  });
  

  ///Post/add-post-favorite
  /////UserProfile/get-user-profile-by-id?id=d5e2ebd1-fe02-4d80-9429-dc7461cb8309

  /////Post/get-following-post?UserId=b508fd06-b69e-48e4-a031-a08bc98e2231

  /////User/get-users?PageSize=10


  /////// FollowingRelationShip/add-following-relation-ship?followingUserId=67

  