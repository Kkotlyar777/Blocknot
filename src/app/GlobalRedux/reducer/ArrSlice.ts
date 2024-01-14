"use client";

import { createSlice } from "@reduxjs/toolkit";

interface ArrState {
  arrAll: any;
}

const initialState: ArrState = {
  arrAll: [
    {
      name: "Документы.zip",
      date: "Nov 15, 2021, 09:45 AM",
      fileNums: 1.322,
      type: "image",
    },
    {
      name: "Фото.png",
      date: " Jan 7, 2022, 03:30 PM",
      fileNums: 8.442,
      type: "image",
    },
    {
      name: "Новый год22.jpg",
      date: "Mar 20, 2022, 10:15 AM",
      fileNums: 1.0,
      type: "image",
    },
    {
      name: "Старый Год 33.mp4",
      date: "Apr 5, 2022, 01:00 PM",
      fileNums: 1.235,
      type: "image",
    },
    {
      name: "Откаты на форум.mp3",
      date: "Feb 12, 2022, 05:55 PM",
      fileNums: 7.381,
      type: "video",
    },
    {
      name: "Очень секретно.zip",
      date: "May 25, 2022, 11:20 AM",
      fileNums: 3.515,
      type: "zip",
    },
    {
      name: "Git.zip",
      date: "Jul 8, 2022, 08:10 AM",
      fileNums: 7.962,
      type: "zip",
    },
  ],
};

export const ArrSlice = createSlice({
  name: "ArrStates",
  initialState,
  reducers: {
    addArrEl(state, action) {
      state.arrAll = [...action.payload, ...state.arrAll];
    },
  },
});

export default ArrSlice.reducer;
