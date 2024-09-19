import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproductData = createAsyncThunk('allproducts/fetchproductData', async()=>{
   const response = await axios.get('https://dummyjson.com/products')
   localStorage.setItem('products',JSON.stringify(response.data.products))
    return response.data.products
})



const productSlice = createSlice({
    name:'allproducts',
    initialState:{
        products:[],
        loading:false,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchproductData.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchproductData.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
        })
        builder.addCase(fetchproductData.rejected,(state)=>{
            state.loading=false
            state.products=[]
            state.error="API Failed,can't fetch the data..."
        })
    }
})

export default productSlice.reducer