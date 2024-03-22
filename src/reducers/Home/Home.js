import { createSlice } from "@reduxjs/toolkit"
import { addCommentFromUser, getAllUser, getFollow, getHistory, getLike, getSav, getTodosByPost12, getUserAbout } from "../../api/home/home"
import { followingByID, unFollowingByID } from "../../api/followUnfollow/followUnfollow"
import { getFollowers } from "../../api/profile/profile"





export const HomeJs = createSlice({
    name: 'homeJs',
    initialState:{
        value: 0,
        data:[],
        user:[],
        dataHistory:[],
        dataUsers:[],
     followersUser: [],
        modalOpenClose:false,
        like:false
    },
    reducers: {
  falseTrueModal:(state,action)=>{
    // console.log(true);
        state.modalOpenClose=!state.modalOpenClose
        // console.log(state.modalOpenClose);
  }
    },
    extraReducers:(builder)=>{
      builder.addCase(getTodosByPost12.fulfilled, (state,action)=>{
      state.data=action.payload
   
      })
      builder.addCase(getUserAbout.fulfilled, (state,action)=>{
        state.user=action.payload
     
        })
        builder.addCase(getLike.fulfilled, (state,action)=>{
          state.user=action.payload
       
          })
          builder.addCase(getSav.fulfilled, (state,action)=>{
            // state.user=action.payload
            
         
            })
            
            builder.addCase(addCommentFromUser.fulfilled, (state,action)=>{
              // state.user=action.payload
              
           
              })
              
              builder.addCase(getAllUser.fulfilled, (state,action)=>{
                // state.user=action.payload
                
             state.dataUsers = action.payload
            //  console.log(action.payload);
                })

                builder.addCase(getFollow.fulfilled, (state,action)=>{
                  // state.user=action.payload
                  
              //  state.dataUsers = action.payload
              //  console.log(action.payload);
                  })
                  builder.addCase(getHistory.fulfilled, (state,action)=>{
                    state.dataHistory=action.payload
                    // console.log(action.payload);
                //  state.dataUsers = action.payload
                //  console.log(action.payload);
                    })
                    builder.addCase(unFollowingByID.fulfilled, (state,action)=>{
                    //  action.payload
                    
                      })
                      /////////////////unfollow
                      builder.addCase(getFollowers.fulfilled, (state, action) => {
                        state.followersUser = action.payload;
                        state.isLoading = false;
                    });
                    
                 
    }
    
    

  })
  
  export const {falseTrueModal} = HomeJs.actions
  
  export default HomeJs.reducer
