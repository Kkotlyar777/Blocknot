"use client";

import { Provider } from "react-redux";
import { setupStore } from "../store";

export const Provid = ({ children }) : JSX.Element  => {
  const store = setupStore();
  return <Provider store={store}>{children}</Provider>;
};
