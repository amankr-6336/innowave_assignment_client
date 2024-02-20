import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../../utils/AxiosClient";


export const getList=createAsyncThunk('/test/getall', async ()=>{
   try {
      const response=await axiosClient.get('/test/getall');
      return response.data;
   } catch (error) {
      console.log(error);
   }
})


const appConfigSlice=createSlice({
    name:'appConfigSlice',
    initialState:{
        lists:[]
    },

    extraReducers:(builder)=>{
        builder.addCase(getList.fulfilled,(state,action)=>{
            state.lists=action.payload;

        })
    }
})

export default appConfigSlice.reducer;
