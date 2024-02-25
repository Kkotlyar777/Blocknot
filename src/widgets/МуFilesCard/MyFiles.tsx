"use client";

import { useAppDispatch, useAppSelector } from "@/features/hooks/redux";
import stylesCardLast from "./MyFiles.module.sass";
import { GlobalSvgSelector } from "@/app/GlobalSvgSel";
import { MyFilesSlice } from "@/app/GlobalRedux/reducer/MyFilesSlice";

export const MyFile = () => {
  //-------------------------------------------------
  const dispatch = useAppDispatch();

  // для модального окна
  const {
    arrAll,
    ArrCards,
    hoverElement,
    currentFileId,
    currentNameFile,
    isVisible,
  } = useAppSelector((state) => state.MyFilesSlice);
  const {
    ModalMenus,
    CurrentElement,
    DelCurrentFile,
    setNameValue,
    isReneme,
    isVisibles,
    AddFileSelected,
  } = MyFilesSlice.actions;
  //-------------------------------------------------

  const changeColor = (el: string) => {
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
    if (el === "folder") {
      return { background: "rgba(0, 97, 255, 0.1)" };
    }
  };

  return [...ArrCards, ...arrAll].map((Prpops: any) => {
    return (
      <div
        className={stylesCardLast.LastFile}
        key={Prpops.id}
        onClick={(e) => {
          dispatch(CurrentElement(Prpops.id));
        }}
        style={currentFileId === Prpops.id ? { background: "#b5cafc" } : {}}
      >
        <div className={stylesCardLast.lastFileName}>
          <div
            className={stylesCardLast.lastFilesIcon}
            style={changeColor(Prpops.type.split("/")[0])}
          >
            <GlobalSvgSelector id={Prpops.type.split("/")[0]} />
          </div>
          <span className={stylesCardLast.fileName}>
            {currentNameFile === Prpops.id ? (
              <input
                className={stylesCardLast.renameInput}
                placeholder="Введите новое название"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch(
                      setNameValue({
                        value: e.currentTarget.value,
                        id: Prpops.id,
                      })
                    );
                    dispatch(isReneme(NaN));
                    e.preventDefault();
                  }
                }}
              />
            ) : (
              Prpops.name
            )}
          </span>
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
              dispatch(isVisibles(true));
              dispatch(CurrentElement(Prpops.id));
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
            <ul
              className={stylesCardLast.modalCont}
              style={
                isVisible && currentFileId === Prpops.id
                  ? { display: "flex" }
                  : { display: "none" }
              }
            >
              <li
                className={stylesCardLast.delCard}
                onClick={() => {
                  dispatch(DelCurrentFile());
                }}
                onMouseEnter={(e) => {
                  dispatch(ModalMenus(1));
                }}
                onMouseLeave={(e) => {
                  dispatch(ModalMenus(NaN));
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "26px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.6875 2.5H11.25V1.875C11.25 0.839453 10.4105 0 9.375 0H6.875C5.83945 0 5 0.839453 5 1.875V2.5H1.5625C0.69957 2.5 0 3.19957 0 4.0625V5.3125C0 5.6577 0.279805 5.9375 0.625 5.9375H15.625C15.9702 5.9375 16.25 5.6577 16.25 5.3125V4.0625C16.25 3.19957 15.5504 2.5 14.6875 2.5ZM6.25 1.875C6.25 1.53047 6.53047 1.25 6.875 1.25H9.375C9.71953 1.25 10 1.53047 10 1.875V2.5H6.25V1.875Z"
                      fill={hoverElement === 1 ? "#0061FF" : "#838D94"}
                    />
                    <path
                      d="M1.18603 7.1875C1.0745 7.1875 0.985637 7.2807 0.990949 7.39211L1.50657 18.2141C1.55423 19.2156 2.37689 20 3.37923 20H12.8706C13.873 20 14.6956 19.2156 14.7433 18.2141L15.2589 7.39211C15.2642 7.2807 15.1754 7.1875 15.0638 7.1875H1.18603ZM10.6249 8.75C10.6249 8.40469 10.9046 8.125 11.2499 8.125C11.5952 8.125 11.8749 8.40469 11.8749 8.75V16.875C11.8749 17.2203 11.5952 17.5 11.2499 17.5C10.9046 17.5 10.6249 17.2203 10.6249 16.875V8.75ZM7.49993 8.75C7.49993 8.40469 7.77962 8.125 8.12493 8.125C8.47025 8.125 8.74993 8.40469 8.74993 8.75V16.875C8.74993 17.2203 8.47025 17.5 8.12493 17.5C7.77962 17.5 7.49993 17.2203 7.49993 16.875V8.75ZM4.37493 8.75C4.37493 8.40469 4.65462 8.125 4.99993 8.125C5.34525 8.125 5.62493 8.40469 5.62493 8.75V16.875C5.62493 17.2203 5.34525 17.5 4.99993 17.5C4.65462 17.5 4.37493 17.2203 4.37493 16.875V8.75Z"
                      fill={hoverElement === 1 ? "#0061FF" : "#838D94"}
                    />
                  </svg>
                </div>
                <div>Удалить</div>
              </li>
              <li
                className={stylesCardLast.renameCard}
                onMouseEnter={(e) => {
                  dispatch(ModalMenus(2));
                }}
                onMouseLeave={(e) => {
                  dispatch(ModalMenus(NaN));
                }}
                onClick={() => {
                  dispatch(isReneme(Prpops.id));
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "26px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11.7858 7.85693H20.4286C20.637 7.85693 20.8369 7.93972 20.9843 8.08707C21.1315 8.23441 21.2143 8.43426 21.2143 8.64265V13.3569C21.2143 13.5653 21.1315 13.7652 20.9843 13.9125C20.8369 14.0599 20.637 14.1426 20.4286 14.1426H11.7858"
                      stroke={hoverElement === 2 ? "#0061FF" : "#838D94"}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.92862 14.1426H1.57148C1.3631 14.1426 1.16325 14.0599 1.0159 13.9125C0.868546 13.7652 0.785767 13.5653 0.785767 13.3569V8.64265C0.785767 8.43426 0.868546 8.23441 1.0159 8.08707C1.16325 7.93972 1.3631 7.85693 1.57148 7.85693H3.92862"
                      stroke={hoverElement === 2 ? "#0061FF" : "#838D94"}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.28577 3.92847H9.42862"
                      stroke={hoverElement === 2 ? "#0061FF" : "#838D94"}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.28577 18.0713H9.42862"
                      stroke={hoverElement === 2 ? "#0061FF" : "#838D94"}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.85718 3.92847V18.0713"
                      stroke={hoverElement === 2 ? "#0061FF" : "#838D94"}
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>Переименовать</div>
              </li>
              <li
                className={stylesCardLast.download}
                onMouseEnter={() => {
                  dispatch(ModalMenus(3));
                }}
                onMouseLeave={() => {
                  dispatch(ModalMenus(NaN));
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "26px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M12 14L11.2929 14.7071L12 15.4142L12.7071 14.7071L12 14ZM13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5L13 5ZM6.29289 9.70711L11.2929 14.7071L12.7071 13.2929L7.70711 8.29289L6.29289 9.70711ZM12.7071 14.7071L17.7071 9.70711L16.2929 8.29289L11.2929 13.2929L12.7071 14.7071ZM13 14L13 5L11 5L11 14L13 14Z"
                      fill={hoverElement === 3 ? "#0061FF" : "#838D94"}
                    />
                    <path
                      d="M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16"
                      fill={hoverElement === 3 ? "#0061FF" : "#838D94"}
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div>Скачать</div>
              </li>
              <li
                className={stylesCardLast.info}
                onClick={() => {
                  dispatch(AddFileSelected());
                }}
                onMouseEnter={(e) => {
                  dispatch(ModalMenus(4));
                }}
                onMouseLeave={(e) => {
                  dispatch(ModalMenus(NaN));
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "26px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9478 7.22916C19.8169 6.82494 19.4577 6.53785 19.0327 6.49962L13.2602 5.97645L10.9776 0.643794C10.8093 0.252979 10.426 0 10.0001 0C9.5742 0 9.19089 0.252979 9.02258 0.644708L6.73996 5.97645L0.966512 6.49962C0.542308 6.53876 0.184023 6.82494 0.0523364 7.22916C-0.0793501 7.63338 0.0422653 8.07674 0.363165 8.35622L4.72652 12.1757L3.43987 17.8328C3.34572 18.2487 3.50747 18.6787 3.85324 18.9282C4.03909 19.0622 4.25654 19.1304 4.47581 19.1304C4.66487 19.1304 4.85241 19.0796 5.02072 18.979L10.0001 16.0086L14.9776 18.979C15.3419 19.1978 15.801 19.1778 16.146 18.9282C16.4919 18.6779 16.6535 18.2478 16.5594 17.8328L15.2727 12.1757L19.6361 8.35698C19.957 8.07674 20.0795 7.63414 19.9478 7.22916Z"
                      fill={hoverElement === 4 ? "#0061FF" : "#838D94"}
                    />
                  </svg>
                </div>
                <div>Добавить в избранное</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  });
};
