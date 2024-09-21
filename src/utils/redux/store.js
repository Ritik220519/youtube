import hamAppSlice from "./hamAppSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        hamApp : hamAppSlice,
    },
})

export default store;