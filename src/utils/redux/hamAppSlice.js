import { createSlice } from "@reduxjs/toolkit";

const hamAppSlice = createSlice({
  name: "hamApp",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu : (state)=>{
        state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu : (state)=>{
      state.isMenuOpen = false;
  }
  }
});
export const {toggleMenu , closeMenu} = hamAppSlice.actions;
export default hamAppSlice.reducer;
