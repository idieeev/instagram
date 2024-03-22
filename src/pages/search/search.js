import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export const getUsers = createAsyncThunk(
  "searchUsers/getUsers",
  async (sear = "") => {
    try {
      const { data } = await axiosRequest.get(
        `User/get-users?UserName=${sear}`
      );
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getUsersId = createAsyncThunk(
  "searchUsers/getUsersId",
  async (id) => {
    // console.log(id);
    try {
      const { data } = await axiosRequest.get(
        `UserProfile/get-user-profile-by-id?id=${id}`
      );
      // console.log(data.data);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const getUserHistory = createAsyncThunk(
  "searchUsers/getUserHistory",
  async () => {
    try {
      const { data } = await axiosRequest.get(
        `SearchHistory/get-user-search-histories`
      );
      // console.log(data.data)
      return data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const postUserHistory = createAsyncThunk(
  "searchUsers/postUserHistory",
  async (id, { dispatch }) => {
    try {
      const { data } = await axiosRequest.post(
        `SearchHistory/add-user-search-history?UserSearchId=${id}`
      );
      // console.log(data);
      dispatch(getUserHistory());
    } catch (error) {
      console.error(error);
    }
  }
);

export const delUserHistory = createAsyncThunk(
  "searchUsers/delUserHistory",
  async (id, { dispatch }) => {
    try {
      const { data } = await axiosRequest.delete(
        `SearchHistory/delete-user-search-history?id=${id}`
      );
      // console.log(data);
      dispatch(getUserHistory());
    } catch (error) {
      console.error(error);
    }
  }
);

export const delUserHistorys = createAsyncThunk(
  "searchUsers/delUserHistorys",
  async (_, { dispatch }) => {
    try {
      await axiosRequest.delete(`SearchHistory/delete-user-search-histories`);
      dispatch(getUserHistory());
    } catch (error) {
      console.error(error);
    }
  }
);

export const getPostId = createAsyncThunk(
  "searchUsers/getPostId",
  async function (id) {
    try {
      let { data } = await axiosRequest.get(`Post/get-posts?UserId=${id}`);
    //   console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
