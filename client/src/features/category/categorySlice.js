import { createSlice } from "@reduxjs/toolkit"
import { fetchCategories } from "./categoryThunk"

const initialState={
    categories:[],
    error:null,
    loading:false
}

const categorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
          .addCase(fetchCategories.pending,(state)=>{
            state.loading=true
            state.error=null
          })
          .addCase(fetchCategories.fulfilled,(state,action)=>{
            state.loading=false,
            state.categories=action.payload.data
          })
          .addCase(fetchCategories.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload
          })
    }
})

export default categorySlice.reducer