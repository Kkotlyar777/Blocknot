"use client";

import { createSlice } from "@reduxjs/toolkit";

interface AllArr {
  name: string;
  lastModified: number;
  fileNums: number;
  type: string;
  id: number;
  size: number;
}

interface ModalMenu {
  arrAll: AllArr[];
  isVisible: boolean;
  hoverElement: number;
  currentFileId: number;
  NameValue: string;
  currentNameFile: number;
}

const initialState: ModalMenu = {
  // получать с бека
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

    // -----------------------------
  ],

  isVisible: false,
  hoverElement: NaN,
  currentFileId: NaN,
  NameValue: "",
  currentNameFile: NaN,
  // поиск
  currentSearchInput: '',
  SearchArr: [],
};

export const MyFilesSlice = createSlice({
  name: "SiteBar",
  initialState,

  reducers: {
    addArrEl(state, action) {
      state.arrAll = [...action.payload, ...state.arrAll];
    },
    isVisibles(state, action) {
      state.isVisible = action.payload;
    },

    ModalMenus(state, action) {
      state.hoverElement = action.payload;
    },
    CurrentElement(state, action) {
      state.currentFileId = action.payload;
    },
    DelCurrentFile(state) {
      // отправлять запрос на бек поменять
      state.arrAll.map((el, ind) => {
        if (el.id === state.currentFileId) {
          state.arrAll.splice(ind, 1);
        }
      });
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
    isReneme(state, action) {
      state.currentNameFile = action.payload;
    },
    // Поиск
    SetInputValue(state, action) {
      state.currentSearchInput = action.payload;
    },
    Searching(state, action) {
      state.SearchArr = state.arrAll.filter((obj) => obj.name.includes(action.payload))
    },
  },
});

export default MyFilesSlice.reducer;
