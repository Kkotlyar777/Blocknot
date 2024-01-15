"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/SideBarSlice";
import ArrSlice from "./reducer/ArrSlice";
const rootReduser = combineReducers({
  userReducer,
  ArrSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
