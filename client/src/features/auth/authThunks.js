import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, registerRequest } from "./authAPI";

export const loginUser=createAsyncThunk(
    "auth/login",
    async(credentials,thunkAPI)=>{
        try{
            return await loginRequest(credentials)
        }catch(err){
            const message=err.response?.data?.message || err.message || "Login failed";
            return thunkAPI.rejectWithValue(message)
        }
       
    }
)

export const registerUser=createAsyncThunk(
    "auth/register",
    async(credentials,thunkAPI)=>{
        try{
            return await registerRequest(credentials)
        }catch(err){
            const message=err.response?.data?.message || err.message || "Login failed";
            return thunkAPI.rejectWithValue(message)
        }
    }
)