"use client";

import { useAppDispatch, useAppSelector } from "@/features/hooks/redux";
import styles from "./Search.module.sass";
import { ArrSlice } from "@/app/GlobalRedux/reducer/ArrSlice";
import { GlobalSvgSelector } from "@/app/GlobalSvgSel";
import Link from "next/link";
import { MyFilesSlice } from "@/app/GlobalRedux/reducer/MyFilesSlice";

export const Search = () => {
  //-------------------------------------------------
  const { SearchArr, currentFileId } = useAppSelector(
    (state) => state.MyFilesSlice
  );
  const { CurrentElement } = MyFilesSlice.actions;

  const dispatch = useAppDispatch();
  const changeColor = (el) => {
    if (el === "application") {
      return { background: "#D3D2FF" };
    }
    if (el === "image") {
      return { background: "#FFE5CD" };
    }
    if (el === "audio") {
      return { background: "#FFC3C3" };
    }
    if (el === "video") {
      return { background: "#F1CDFF" };
    }
  };
  //----------------------------

  return SearchArr.map((Prpops: any) => {
    return (
      <Link
        href={`/MyFiles`}
        className={styles.searchList}
        onClick={(e) => {
          dispatch(CurrentElement(Prpops.id));
        }}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.searchList}>
          <div
            className={styles.iconSvg}
            style={changeColor(Prpops.type.split("/")[0])}
          >
            <GlobalSvgSelector id={Prpops.type.split("/")[0]} />
          </div>
          <span className={styles.txt}>{Prpops.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3"
            height="15"
            viewBox="0 0 3 15"
            fill="none"
          >
            <circle cx="1.45833" cy="1.45833" r="1.45833" fill="#808688" />
            <circle cx="1.45833" cy="7.29167" r="1.45833" fill="#808688" />
            <ellipse
              cx="1.45833"
              cy="13.125"
              rx="1.45833"
              ry="1.45833"
              fill="#808688"
            />
          </svg>
        </div>
      </Link>
    );
  });
};
