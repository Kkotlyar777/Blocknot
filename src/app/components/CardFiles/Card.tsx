"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";
import stylesCard from "./Card.module.sass";
import { ArrSlice } from "@/app/GlobalRedux/reducer/ArrSlice";
import { useState } from "react";

export const CardComp = () => {
  const { ArrCards } = useAppSelector((state) => state.ArrSlice);
  const { AddCard } = ArrSlice.actions;
  const dispatch = useAppDispatch();

  const [currentCard, SetCurrentCard] = useState();
  const [name, setName] = useState("");
  console.log(name);

  return ArrCards.map((Prpops: any) => {
    return (
      <div className={stylesCard.CardCont}>
        <div className={stylesCard.upCont}>
          <div className={stylesCard.svgBlock}>
            <svg
              width="18"
              height="14"
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3154 1.79424H9.08882L7.65137 0.0883548C7.60301 0.0303156 7.53055 -0.00223361 7.45499 0.000119331H1.62466C0.734496 0.00658992 0.0163574 0.728943 0.0163574 1.61777V12.1099C0.0174375 13.0018 0.741271 13.7245 1.63448 13.7256H16.3154C17.2086 13.7245 17.9324 13.0018 17.9335 12.1099V3.40992C17.9324 2.51806 17.2086 1.79532 16.3154 1.79424Z"
                fill="#0061FF"
              />
            </svg>
          </div>
          <div className={stylesCard.Contdoc}>
            <div className={stylesCard.txt}>{Prpops.name}</div>
            <input
              type="text"
              className={stylesCard.txt}
              onChange={(e) => setName(e.target.value)}
              value={name}
              onKeyDown={(e) => e.key === "Enter" && AddCard(name)}
            />
            <div className={stylesCard.date}>{Prpops.date}</div>
          </div>
          <svg
            width="4"
            height="20"
            viewBox="0 0 4 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="2" r="2" fill="#808688" />
            <circle cx="2" cy="10" r="2" fill="#808688" />
            <ellipse cx="2" cy="17.9998" rx="2" ry="2" fill="#808688" />
          </svg>
        </div>
        <div className={stylesCard.underCont}>
          <div className={stylesCard.shareCont}>
            <span>Поделиться</span>
            <div>
              <img
                src="./Rectangle 2009.png"
                alt=""
                className={stylesCard.img}
              />
              <img
                src="./Rectangle 2010.png"
                alt=""
                className={stylesCard.img}
              />
              <img
                src="./Rectangle 2011.png"
                alt=""
                className={stylesCard.img}
              />
              <img
                src="./Rectangle 2012.png"
                alt=""
                className={stylesCard.img}
              />
              <div>+80</div>
            </div>
          </div>
          <div className={stylesCard.FilesInside}>
            <span>Файлов внутри</span>
            <div>{Prpops.fileNums}</div>
          </div>
        </div>
      </div>
    );
  });
};
