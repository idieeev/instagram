import { createSlice } from '@reduxjs/toolkit'
import { getById, getMessage, getUser, searchUser } from '../../api/Message/messageApi';



export const Chat = createSlice({
  name: 'message',
  initialState: {
    value: 0,
    data: [],
    user1: [],
    byid: [],
    chatMessage: [],
    userMessage: {}
  },
  reducers: {
    turbo: (state, action) => {
      state.userMessage = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      console.log(1);
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data = action.payload
    })
    builder.addCase(getUser.rejected, (state, action) => {
      console.log(3);
    })
    builder.addCase(searchUser.pending, (state, action) => {
      console.log(1);
    })
    builder.addCase(searchUser.fulfilled, (state, action) => {
      state.user1 = action.payload
    })
    builder.addCase(searchUser.rejected, (state, action) => {
      console.log(3);
    })
    builder.addCase(getById.pending, (state, action) => {
      console.log(1);
    })
    builder.addCase(getById.fulfilled, (state, action) => {
      state.byid = action.payload
      state.userMessage = action.payload
    })
    builder.addCase(getById.rejected, (state, action) => {
      console.log(3);
    })
    builder.addCase(getMessage.pending, (state, action) => {
      console.log(1);
    })
    builder.addCase(getMessage.fulfilled, (state, action) => {
      state.chatMessage = action.payload.reverse()
    })
    builder.addCase(getMessage.rejected, (state, action) => {
      console.log(3);
    })

  }
})

export const { setUserMessage, turbo } = Chat.actions

export default Chat.reducer