import hamAppSlice from "./hamAppSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer : {
        hamApp : hamAppSlice,
        search : searchSlice,
    },
})

export default store;