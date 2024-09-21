import { createSlice } from "@reduxjs/toolkit";

const hamAppSlice = createSlice({
  name: "hamApp",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu : (state)=>{
        state.isMenuOpen = !state.isMenuOpen
    }
  }
});
export const {toggleMenu} = hamAppSlice.actions;
export default hamAppSlice.reducer;
