import {configureStore}  from "@reduxjs/toolkit"
import productSlice from "./slice/productSlice"
import wishlistlice from "./slice/wishlistlice"
import cartSlice from "./slice/cartSlice"



const cartStore = configureStore({
    reducer:{
        productSlice,
        wishlistlice,
        cartReducer:cartSlice

    }
})

export default cartStore