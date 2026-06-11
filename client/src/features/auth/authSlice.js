import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunks";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout(state){
            state.user=null,
            state.token=null,
            state.isAuthenticated=false,
            state.loading=false,
            state.error=null
        },
        clearError(state){
            state.error=null
        },
    },
    extraReducers:(builder)=>{
        //login
        builder
          .addCase(loginUser.pending,(state)=>{
            state.loading=true,
            state.error=null
          })
          .addCase(loginUser.fulfilled,(state)=>{
            state.loading=false,
            state.user=action.payload.user,
            state.isAuthenticated=true,
            state.token=action.payload.token
          })
          .addCase(loginUser.rejected,(state)=>{
            state.loading=false,
            state.error=action.payload
          });

        //register  
         builder
          .addCase(registerUser.pending,(state)=>{
            state.loading=true,
            state.error=null
          })
          .addCase(registerUser.fulfilled,(state)=>{
            state.loading=false,
            state.user=action.payload.user,
            state.isAuthenticated=true,
            state.token=action.payload.token
          })
          .addCase(registerUser.rejected,(state)=>{
            state.loading=false,
            state.error=action.payload
          });
        
    }
})

export const { logout, clearError } = authSlice.actions;

export default authSlice.reducer;