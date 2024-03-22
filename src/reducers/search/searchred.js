import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPostId, getUserHistory, getUsers, getUsersId } from '../../pages/search/search'

export const counterSlice = createSlice({
  name: 'searchUsers',
  initialState: {
    data: [],
    dataHistory: [],
    dataUserId: [],
    postId:[]
  },
  reducers: {},
  

  extraReducers: (builder) => {
    // getUsers
    builder.addCase(getUsers.pending, (state, actions) => {
        console.log(1);
    })
    builder.addCase(getUsers.fulfilled, (state, actions) => {
        state.data = actions.payload
    })
    builder.addCase(getUsers.rejected, (state, actions) => {
        console.log(error);
    })

    // getUserHistory
    builder.addCase(getUserHistory.pending, (state, actions) => {
        console.log(1);
    })
    builder.addCase(getUserHistory.fulfilled, (state, actions) => {
        state.dataHistory = actions.payload
    })
    builder.addCase(getUserHistory.rejected, (state, actions) => {
        console.log(error);
    })
    
    // getUsersId
    builder.addCase(getUsersId.pending, (state, actions) => {
        console.log(1);
    })
    builder.addCase(getUsersId.fulfilled, (state, actions) => {
        state.dataUserId = actions.payload
    })
    builder.addCase(getUsersId.rejected, (state, actions) => {
        console.log(error);
    })

    // getPostId
    builder.addCase(getPostId.pending, (state, actions) => {
        console.log(1);
    })
    builder.addCase(getPostId.fulfilled, (state, actions) => {
        state.postId = actions.payload
    })
    builder.addCase(getPostId.rejected, (state, actions) => {
        console.log(error);
    })
  }
})

export const {} = counterSlice.actions

export default counterSlice.reducer