import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const Store = configureStore({
    reducer:{
        //reducer should be in key value pair
        counterReducer:counterSlice
    }
})