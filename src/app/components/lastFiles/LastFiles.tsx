import stylesCardLast from "./Files.module.sass";

export const LastFile = () => {
  const ArrCard: any = [
    { name: "Документы", date: "Nov 15, 2021, 09:45 AM", fileNums: 1.322 },
    { name: "Фото", date: " Jan 7, 2022, 03:30 PM", fileNums: 8.442 },
    { name: "Новый год22", date: "Mar 20, 2022, 10:15 AM", fileNums: 1.0 },
    { name: "Старый Год 33", date: "Apr 5, 2022, 01:00 PM", fileNums: 1.235 },
    {
      name: "Откаты на форум",
      date: "Feb 12, 2022, 05:55 PM",
      fileNums: 7.381,
    },
    { name: "Очень секретно", date: "May 25, 2022, 11:20 AM", fileNums: 3.515 },
    { name: "Git", date: "Jul 8, 2022, 08:10 AM", fileNums: 7.962 },
  ];
  return ArrCard.map((Prpops: any) => {
    return (
      <div className={stylesCardLast.LastFile}>
        <div className={stylesCardLast.lastFileName}>
          <div className={stylesCardLast.lastFilesIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <g clip-path="url(#clip0_3_770)">
                <path
                  d="M8.34144 9.40201C8.13249 9.19293 7.88439 9.02707 7.61131 8.9139C7.33824 8.80074 7.04554 8.74249 6.74994 8.74249C6.45435 8.74249 6.16165 8.80074 5.88857 8.9139C5.6155 9.02707 5.36739 9.19293 5.15844 9.40201L0.0284424 14.532C0.0977878 15.4726 0.519623 16.3523 1.2096 16.9953C1.89957 17.6383 2.80683 17.9971 3.74994 18H14.2499C14.9847 17.9999 15.7031 17.7825 16.3147 17.3753L8.34144 9.40201Z"
                  fill="#F2994A"
                />
                <path
                  d="M13.5 6C14.3284 6 15 5.32843 15 4.5C15 3.67157 14.3284 3 13.5 3C12.6716 3 12 3.67157 12 4.5C12 5.32843 12.6716 6 13.5 6Z"
                  fill="#F2994A"
                />
                <path
                  d="M14.25 0H3.75C2.7558 0.00119089 1.80267 0.396661 1.09966 1.09966C0.396661 1.80267 0.00119089 2.7558 0 3.75L0 12.4395L4.098 8.3415C4.44623 7.99318 4.85967 7.71686 5.31471 7.52835C5.76974 7.33983 6.25746 7.2428 6.75 7.2428C7.24254 7.2428 7.73026 7.33983 8.18529 7.52835C8.64033 7.71686 9.05377 7.99318 9.402 8.3415L17.3752 16.3148C17.7825 15.7031 17.9999 14.9848 18 14.25V3.75C17.9988 2.7558 17.6033 1.80267 16.9003 1.09966C16.1973 0.396661 15.2442 0.00119089 14.25 0V0ZM13.5 7.5C12.9067 7.5 12.3266 7.32405 11.8333 6.99441C11.3399 6.66476 10.9554 6.19623 10.7284 5.64805C10.5013 5.09987 10.4419 4.49667 10.5576 3.91473C10.6734 3.33279 10.9591 2.79824 11.3787 2.37868C11.7982 1.95912 12.3328 1.6734 12.9147 1.55764C13.4967 1.44189 14.0999 1.5013 14.6481 1.72836C15.1962 1.95542 15.6648 2.33994 15.9944 2.83329C16.3241 3.32664 16.5 3.90666 16.5 4.5C16.5 5.29565 16.1839 6.05871 15.6213 6.62132C15.0587 7.18393 14.2956 7.5 13.5 7.5Z"
                  fill="#F2994A"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_770">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
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
        <span className={stylesCardLast.fileSize}>2.8 MB</span>
        <div className={stylesCardLast.fileSizeDiv}>
          <span className={stylesCardLast.fileDate}>{Prpops.date}</span>
          <svg
            className={stylesCardLast.moreFunction}
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
        </div>
      </div>
    );
  });
};
