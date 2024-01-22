"use client";

import { useAppDispatch, useAppSelector } from "@/features/hooks/redux";
import stylesCardLast from "./MyFiles.module.sass";
import { ArrSlice } from "@/app/GlobalRedux/reducer/ArrSlice";
import { GlobalSvgSelector } from "@/app/GlobalSvgSel";
import { useState } from "react";

export const MyFile = () => {
  //-------------------------------------------------
  const { arrAll, currentFile, currentPop } = useAppSelector(
    (state) => state.ArrSlice
  );
  const { SetCurrentFile, SetCurrentPop, DelCurrentFile } = ArrSlice.actions;
  const dispatch = useAppDispatch();
  const [currentInput, setCurrentInput] = useState("");
  //-------------------------------------------------

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

  return arrAll.map((Prpops: any) => {
    return (
      <div
        className={stylesCardLast.LastFile}
        key={Prpops.id}
        onClick={(e) => {
          dispatch(SetCurrentFile(Prpops.id));
        }}
        style={currentFile === Prpops.id ? { background: "#b5cafc" } : {}}
      >
        <div className={stylesCardLast.lastFileName}>
          <div
            className={stylesCardLast.lastFilesIcon}
            style={changeColor(Prpops.type.split("/")[0])}
          >
            <GlobalSvgSelector id={Prpops.type.split("/")[0]} />
          </div>
          <span className={stylesCardLast.fileName}>{Prpops.name}</span>
        </div>
        <div className={stylesCardLast.ShareImg}>
          <img
            src="./Rectangle 2009.png"
            alt=""
            className={stylesCardLast.img}
          />
          <img
            src="./Rectangle 2010.png"
            alt=""
            className={stylesCardLast.img}
          />
          <img
            src="./Rectangle 2011.png"
            alt=""
            className={stylesCardLast.img}
          />
          <img
            src="./Rectangle 2012.png"
            alt=""
            className={stylesCardLast.img}
          />
          <div className={stylesCardLast.moreImg}>+12</div>
        </div>
        <span className={stylesCardLast.fileSize}>
          {(Prpops.size / 1048576).toFixed(2)} MB
        </span>
        <div className={stylesCardLast.fileSizeDiv}>
          <span className={stylesCardLast.fileDate}>
            {new Date(Prpops.lastModified)
              .toString()
              .split(" ")
              .splice(0, 4)
              .join(" ")}
          </span>
          <div
            className={stylesCardLast.svgCont}
            onClick={(e) => {
              dispatch(SetCurrentPop(true));
              dispatch(SetCurrentFile(Prpops.id));
              e.stopPropagation();
            }}
          >
            <svg
              width="3"
              height="16"
              viewBox="0 0 3 16"
              fill="#808688"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 1707477934">
                <g id="Group 1689">
                  <circle
                    id="Ellipse 4"
                    cx="1.45833"
                    cy="1.95833"
                    r="1.45833"
                    fill="#808688"
                  />
                  <circle
                    id="Ellipse 5"
                    cx="1.45833"
                    cy="7.79165"
                    r="1.45833"
                    fill="#808688"
                  />
                  <ellipse
                    id="Ellipse 6"
                    cx="1.45833"
                    cy="13.625"
                    rx="1.45833"
                    ry="1.45833"
                    fill="#808688"
                  />
                </g>
              </g>
            </svg>
            <div
              className={stylesCardLast.modalCont}
              style={
                currentPop && currentFile === Prpops.id
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              <div
                className={stylesCardLast.delCard}
                onClick={() => {
                  dispatch(DelCurrentFile(currentFile));
                }}
              >
                Удалить
              </div>
              <div className={stylesCardLast.renameCard}>Переименовать</div>
              <div className={stylesCardLast.download}>Скачать</div>
              <div className={stylesCardLast.info}>Информация</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
