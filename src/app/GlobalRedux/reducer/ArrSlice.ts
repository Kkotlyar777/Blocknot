"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ArrCards: [
    {
      name: "ПапкаДокументы.zip",
      date: "Nov 15, 2021, 09:45 AM",
      fileNums: 1.322,
      type: "image",
      id: 0,
    },
    {
      name: "ПапкаФото.png",
      date: " Jan 7, 2022, 03:30 PM",
      fileNums: 8.442,
      type: "image",
      id: 1,
    },
    {
      name: "ПапкаНовый год22.jpg",
      date: "Mar 20, 2022, 10:15 AM",
      fileNums: 1.0,
      type: "image",
      id: 2,
    },
    {
      name: "ПапкаСтарый Год 33.mp4",
      date: "Apr 5, 2022, 01:00 PM",
      fileNums: 1.235,
      type: "image",
      id: 3,
    },
    {
      name: "ПапкаОткаты на форум.mp3",
      date: "Feb 12, 2022, 05:55 PM",
      fileNums: 7.381,
      type: "video",
      id: 4,
    },
    {
      name: "ПапкаОчень секретно.zip",
      date: "May 25, 2022, 11:20 AM",
      fileNums: 3.515,
      type: "zip",
      id: 5,
    },
    {
      name: "ПапкаGit.zip",
      date: "Jul 8, 2022, 08:10 AM",
      fileNums: 7.962,
      type: "zip",
      id: 6,
    },
  ],
  currentFile: NaN,
  currentPop: false,
  arrAll: [
    {
      name: "Документы.zip",
      date: "Nov 15, 2021, 09:45 AM",
      fileNums: 1.322,
      type: "image",
      id: 0,
    },
    {
      name: "Фото.png",
      date: " Jan 7, 2022, 03:30 PM",
      fileNums: 8.442,
      type: "image",
      id: 1,
    },
    {
      name: "Новый год22.jpg",
      date: "Mar 20, 2022, 10:15 AM",
      fileNums: 1.0,
      type: "image",
      id: 2,
    },
    {
      name: "Старый Год 33.mp4",
      date: "Apr 5, 2022, 01:00 PM",
      fileNums: 1.235,
      type: "image",
      id: 3,
    },
    {
      name: "Откаты на форум.mp3",
      date: "Feb 12, 2022, 05:55 PM",
      fileNums: 7.381,
      type: "video",
      id: 4,
    },
    {
      name: "Очень секретно.zip",
      date: "May 25, 2022, 11:20 AM",
      fileNums: 3.515,
      type: "zip",
      id: 5,
    },
    {
      name: "Git.zip",
      date: "Jul 8, 2022, 08:10 AM",
      fileNums: 7.962,
      type: "zip",
      id: 6,
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
    SetCurrentFile(state, action) {
      state.currentFile = action.payload;
    },
    SetCurrentPop(state, action) {
      state.currentPop = action.payload;
    },
    DelCurrentFile(state, action) {
      state.arrAll.map((el, ind) => {
        if (el.id === state.currentFile) {
          state.arrAll.splice(ind, 1);
        }
      });
    },
    AddCard(state, action) {
      state.ArrCards = [
        ...state.ArrCards,
        {
          name: "Очень секретно23232.zip",
          date: "May 25, 2022, 11:20 AM",
          fileNums: 3.515,
          type: "zip",
          id: 7,
        },
      ];
    },
  },
});

export default ArrSlice.reducer;
