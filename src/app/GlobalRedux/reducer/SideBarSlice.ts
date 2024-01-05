"use client";

import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  numPage: number;
}

const initialState: UserState = {
  numPage: Number(localStorage.getItem("numMenu")) || 0,
};

export const SideBarSlice = createSlice({
  name: "SiteBar",
  initialState,
  reducers: {
    setNumPage(state, action) {
      state.numPage = action.payload;
      localStorage.setItem("numMenu", state.numPage.toString());
    },
  },
});

export default SideBarSlice.reducer;
