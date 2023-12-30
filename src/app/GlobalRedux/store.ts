"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/SideBarSlice";
const rootReduser = combineReducers({
  userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
