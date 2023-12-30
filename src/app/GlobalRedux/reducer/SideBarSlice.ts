"use client";

import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  numPage: number;
}

const initialState: UserState = {
  numPage: 0,
};

export const SideBarSlice = createSlice({
  name: "SiteBar",
  initialState,
  reducers: {
    setNumPage(state, action) {
      state.numPage = action.payload;
    },
  },
});

export default SideBarSlice.reducer;
