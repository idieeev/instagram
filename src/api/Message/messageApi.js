import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";
import { turbo } from "../../reducers/Message/Message";
import { useDispatch } from "react-redux";



export const getUser = createAsyncThunk("message/getUser", async () => {
  try {
    let { data } = await axiosRequest.get("Chat/get-chats");
    return data.data
  } catch (error) {
    console.error(error);
  }
})


export const searchUser = createAsyncThunk("message/searchUser", async (text) => {
  try {
    let { data } = await axiosRequest.get(`User/get-users?UserName=${text}`);
    return data.data
  } catch (error) {
    console.error(error);
  }
})

export const getById = createAsyncThunk("message/getById", async (id) => {
  try {
    let { data } = await axiosRequest.get(`UserProfile/get-user-profile-by-id?id=${id}`);
    return data.data
  } catch (error) {
    console.error(error);
  }
})

export const getMessage = createAsyncThunk("message/getMessage", async (id) => {
  try {
    console.log(id)
    let { data } = await axiosRequest.get(`Chat/get-chat-by-id?chatId=${id}`);
    return data.data
  } catch (error) {
    console.error(error);
  }
})

export const postChat = createAsyncThunk("message/postChat", async (idx, { dispatch }) => {
  try {
    // console.log(id)
    let { data } = await axiosRequest.post(`Chat/create-chat?receiverUserId=${idx}`);
    dispatch(getUser(data))
  } catch (error) {
    console.error(error);
  }
})

export const deleteChat = createAsyncThunk("message/deleteChat", async (id, { dispatch }) => {
  try {
    let { data } = await axiosRequest.delete(`Chat/delete-chat?chatId=${id}`);
    dispatch(getUser())
    // navigate(-1)
  } catch (error) {
    console.error(error);
  }
})

export const deleteMessage = createAsyncThunk("message/deleteMessage", async ({id,chatId}, { dispatch }) => {
  console.log(id);
  try {
    let { data } = await axiosRequest.delete(`Chat/delete-message?massageId=${id}`);
    dispatch(getMessage(chatId))
  } catch (error) {
    console.error(error);
  }
})

// export const sendMessage = createAsyncThunk("message/sendMessage", async ({ chatId, messageText }, { dispatch }) => {
//   let formdata = new FormData()
//   formdata.append("chatId", chatId)
//   formdata.append("messageText", messageText)
//   try {
//     let { data } = await axiosRequest.post(`Chat/send-message`, formdata, {
//       "Content-Type": "multipart/form-data"
//     });
//     dispatch(getMessage())
//   } catch (error) {
//     console.error(error);
//   }
// })