"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ArrCards: [
    {
      name: "ПапкаДокументы.zip",
      lastModified: "Nov 15, 2021, 09:45 AM",
      fileNums: 1.322,
      type: "image",
      id: 0,
    },
    {
      name: "ПапкаФото.png",
      lastModified: " Jan 7, 2022, 03:30 PM",
      fileNums: 8.442,
      type: "image",
      id: 1,
    },
    {
      name: "ПапкаНовый год22.jpg",
      lastModified: "Mar 20, 2022, 10:15 AM",
      fileNums: 1.0,
      type: "image",
      id: 2,
    },
    {
      name: "ПапкаСтарый Год 33.mp4",
      lastModified: "Apr 5, 2022, 01:00 PM",
      fileNums: 1.235,
      type: "image",
      id: 3,
    },
    {
      name: "ПапкаОткаты на форум.mp3",
      lastModified: "Feb 12, 2022, 05:55 PM",
      fileNums: 7.381,
      type: "video",
      id: 4,
    },
    {
      name: "ПапкаОчень секретно.zip",
      lastModified: "May 25, 2022, 11:20 AM",
      fileNums: 3.515,
      type: "zip",
      id: 5,
    },
    {
      name: "ПапкаGit.zip",
      lastModified: "Jul 8, 2022, 08:10 AM",
      fileNums: 7.962,
      type: "zip",
      id: 6,
    },
  ],
  currentFile: NaN,
  currentPop: false,
  arrAll: [
    {
      name: "Документы.jpeg",
      lastModified: 1701202439674,
      fileNums: 1.322,
      type: "image/jpeg",
      id: 0,
      size: 1231233,
    },
    {
      name: "Фото.png",
      lastModified: 1701202439674,
      fileNums: 8.442,
      type: "image/png",
      id: 1,
      size: 1231233,
    },
    {
      name: "Новый год22.jpg",
      lastModified: 1701202439674,
      fileNums: 1.0,
      type: "image/jpeg",
      id: 2,
      size: 1231233,
    },
    {
      name: "Старый Год 33.mp4",
      lastModified: 1701202439674,
      fileNums: 1.235,
      type: "video/mp4",
      id: 3,
      size: 1231233,
    },
    {
      name: "Откаты на форум.mp3",
      lastModified: 1701202439674,
      fileNums: 7.381,
      type: "audio/mpeg",
      id: 4,
      size: 1231233,
    },
    {
      name: "Очень секретно.zip",
      lastModified: 1701202439674,
      fileNums: 3.515,
      type: "application",
      id: 5,
      size: 1231233,
    },
    {
      name: "Git.zip",
      lastModified: 1701202439674,
      fileNums: 7.962,
      type: "application",
      id: 6,
      size: 1231233,
    },
  ],
  currentInput: "",
  currentNameFile: NaN,
  NameValue: "",
};

export const ArrSlice = createSlice({
  name: "ArrStates",
  initialState,
  reducers: {
    isReneme(state, action) {
      state.currentNameFile = action.payload;
    },
    setNameValue(state, action) {
      state.NameValue = action.payload.value;
      state.arrAll.map((el) => {
        if (el.id === action.payload.id) {
          state.currentNameFile = el.id;
          el.name = state.NameValue;
        }
      });
    },
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
          name: "",
          lastModified: "May 25, 2022, 11:20 AM",
          fileNums: 3.515,
          type: "zip",
          id: state.ArrCards.slice(0).length,
        },
      ];
    },
    AddInput(state, action) {
      state.currentInput = action.payload;
    },
    SetName(state, action) {
      state.ArrCards[state.ArrCards.length - 1].name = state.currentInput;
    },
  },
});

export default ArrSlice.reducer;
