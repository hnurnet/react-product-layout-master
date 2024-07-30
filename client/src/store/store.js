import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../store/cartSlice";



const store = configureStore({
    reducer : {
        cart: cartSlice

    }

});


export default store;



