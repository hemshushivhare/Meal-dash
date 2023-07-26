import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
const appstore = configureStore({

    reducer:{
    cart:cartReducer

    }

});

export default appstore;