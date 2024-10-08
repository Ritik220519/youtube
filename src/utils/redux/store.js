import hamAppSlice from "./hamAppSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice"
const store = configureStore({
    reducer : {
        hamApp : hamAppSlice,
        search : searchSlice,
        chat : chatSlice,
    },
})

export default store;