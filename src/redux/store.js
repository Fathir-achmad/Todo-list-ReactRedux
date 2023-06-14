import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store = configureStore({ // store ngumpulin semua slicer tinggal masukin ke reducer
    reducer :{
        counter : counterSlice
    }
})