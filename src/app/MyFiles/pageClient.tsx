"use client";

import { useState } from 'react';
import styles from './allFiles.module.sass';
import { LastFile } from '../components/lastFiles/LastFiles';



export const PageClient = () => {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handlerChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFiles([...e.target.files]);
    }
    console.log(files);
  };

	return (
		<div className={styles.mainCont}>
			<div className={styles.upCont}>
				<div className={styles.conth2}>
					<h2 className={styles.h2}>Мои файлы</h2>
				</div>
				<span className={styles.FilesPath}>
					Медия {'>'} важное {'>'} 123.mp4
				</span>
				<label className={styles.mainBtn1}>
					Добавить файл
					<input
						type="file"
						multiple={true}
						style={{ visibility: 'hidden', display: 'none' }}
						onChange={handlerChange}
					/>
				</label>
				<button className={styles.mainBtn}>удалить</button>
			</div>
			<div className={styles.FiltersCont}>
				<ul className={styles.Filters}>
					<li>
						Имя
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="8"
							height="16"
							viewBox="0 0 8 16"
							fill="none"
						>
							<path
								d="M4.31858 14.8052C4.24192 14.934 4.13494 15.0404 4.00779 15.1141C3.88063 15.1879 3.73751 15.2266 3.59198 15.2266C3.44645 15.2266 3.30333 15.1879 3.17617 15.1141C3.04902 15.0404 2.94204 14.934 2.86538 14.8052L0.129938 10.2524C0.0489092 10.1173 0.00413132 9.9621 0.000270367 9.8029C-0.00359058 9.6437 0.0336065 9.48633 0.107986 9.3472C0.182365 9.20807 0.291205 9.09226 0.423163 9.01184C0.555121 8.93142 0.705369 8.88934 0.858249 8.88998H6.32913C6.48143 8.89061 6.6308 8.93362 6.7618 9.01455C6.89279 9.09548 7.00065 9.2114 7.07421 9.35032C7.14778 9.48923 7.18438 9.64609 7.18022 9.80468C7.17607 9.96327 7.13132 10.1178 7.0506 10.2524L4.31858 14.8052Z"
								fill="#838D94"
							/>
							<path
								d="M2.87063 1.19481C2.94729 1.06595 3.05427 0.95962 3.18142 0.88588C3.30858 0.812141 3.4517 0.773438 3.59723 0.773438C3.74276 0.773438 3.88588 0.812141 4.01304 0.88588C4.14019 0.95962 4.24717 1.06595 4.32383 1.19481L7.05927 5.74764C7.1403 5.88269 7.18508 6.0379 7.18894 6.1971C7.1928 6.3563 7.1556 6.51367 7.08122 6.6528C7.00684 6.79194 6.898 6.90774 6.76605 6.98816C6.63409 7.06858 6.48384 7.11066 6.33096 7.11002H0.860079C0.707779 7.10939 0.558406 7.06638 0.427413 6.98545C0.296419 6.90452 0.188562 6.7886 0.114998 6.64969C0.0414336 6.51077 0.00483387 6.35391 0.00898458 6.19532C0.0131353 6.03673 0.0578857 5.88218 0.138607 5.74764L2.87063 1.19481Z"
								fill="#838D94"
							/>
						</svg>
					</li>
					<li>
						Создано
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="8"
							height="16"
							viewBox="0 0 8 16"
							fill="none"
						>
							<path
								d="M4.31858 14.8052C4.24192 14.934 4.13494 15.0404 4.00779 15.1141C3.88063 15.1879 3.73751 15.2266 3.59198 15.2266C3.44645 15.2266 3.30333 15.1879 3.17617 15.1141C3.04902 15.0404 2.94204 14.934 2.86538 14.8052L0.129938 10.2524C0.0489092 10.1173 0.00413132 9.9621 0.000270367 9.8029C-0.00359058 9.6437 0.0336065 9.48633 0.107986 9.3472C0.182365 9.20807 0.291205 9.09226 0.423163 9.01184C0.555121 8.93142 0.705369 8.88934 0.858249 8.88998H6.32913C6.48143 8.89061 6.6308 8.93362 6.7618 9.01455C6.89279 9.09548 7.00065 9.2114 7.07421 9.35032C7.14778 9.48923 7.18438 9.64609 7.18022 9.80468C7.17607 9.96327 7.13132 10.1178 7.0506 10.2524L4.31858 14.8052Z"
								fill="#838D94"
							/>
							<path
								d="M2.87063 1.19481C2.94729 1.06595 3.05427 0.95962 3.18142 0.88588C3.30858 0.812141 3.4517 0.773438 3.59723 0.773438C3.74276 0.773438 3.88588 0.812141 4.01304 0.88588C4.14019 0.95962 4.24717 1.06595 4.32383 1.19481L7.05927 5.74764C7.1403 5.88269 7.18508 6.0379 7.18894 6.1971C7.1928 6.3563 7.1556 6.51367 7.08122 6.6528C7.00684 6.79194 6.898 6.90774 6.76605 6.98816C6.63409 7.06858 6.48384 7.11066 6.33096 7.11002H0.860079C0.707779 7.10939 0.558406 7.06638 0.427413 6.98545C0.296419 6.90452 0.188562 6.7886 0.114998 6.64969C0.0414336 6.51077 0.00483387 6.35391 0.00898458 6.19532C0.0131353 6.03673 0.0578857 5.88218 0.138607 5.74764L2.87063 1.19481Z"
								fill="#838D94"
							/>
						</svg>
					</li>
					<li>
						Отправитель
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="8"
							height="16"
							viewBox="0 0 8 16"
							fill="none"
						>
							<path
								d="M4.31858 14.8052C4.24192 14.934 4.13494 15.0404 4.00779 15.1141C3.88063 15.1879 3.73751 15.2266 3.59198 15.2266C3.44645 15.2266 3.30333 15.1879 3.17617 15.1141C3.04902 15.0404 2.94204 14.934 2.86538 14.8052L0.129938 10.2524C0.0489092 10.1173 0.00413132 9.9621 0.000270367 9.8029C-0.00359058 9.6437 0.0336065 9.48633 0.107986 9.3472C0.182365 9.20807 0.291205 9.09226 0.423163 9.01184C0.555121 8.93142 0.705369 8.88934 0.858249 8.88998H6.32913C6.48143 8.89061 6.6308 8.93362 6.7618 9.01455C6.89279 9.09548 7.00065 9.2114 7.07421 9.35032C7.14778 9.48923 7.18438 9.64609 7.18022 9.80468C7.17607 9.96327 7.13132 10.1178 7.0506 10.2524L4.31858 14.8052Z"
								fill="#838D94"
							/>
							<path
								d="M2.87063 1.19481C2.94729 1.06595 3.05427 0.95962 3.18142 0.88588C3.30858 0.812141 3.4517 0.773438 3.59723 0.773438C3.74276 0.773438 3.88588 0.812141 4.01304 0.88588C4.14019 0.95962 4.24717 1.06595 4.32383 1.19481L7.05927 5.74764C7.1403 5.88269 7.18508 6.0379 7.18894 6.1971C7.1928 6.3563 7.1556 6.51367 7.08122 6.6528C7.00684 6.79194 6.898 6.90774 6.76605 6.98816C6.63409 7.06858 6.48384 7.11066 6.33096 7.11002H0.860079C0.707779 7.10939 0.558406 7.06638 0.427413 6.98545C0.296419 6.90452 0.188562 6.7886 0.114998 6.64969C0.0414336 6.51077 0.00483387 6.35391 0.00898458 6.19532C0.0131353 6.03673 0.0578857 5.88218 0.138607 5.74764L2.87063 1.19481Z"
								fill="#838D94"
							/>
						</svg>
					</li>
					<li>
						Размер
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="8"
							height="16"
							viewBox="0 0 8 16"
							fill="none"
						>
							<path
								d="M4.31858 14.8052C4.24192 14.934 4.13494 15.0404 4.00779 15.1141C3.88063 15.1879 3.73751 15.2266 3.59198 15.2266C3.44645 15.2266 3.30333 15.1879 3.17617 15.1141C3.04902 15.0404 2.94204 14.934 2.86538 14.8052L0.129938 10.2524C0.0489092 10.1173 0.00413132 9.9621 0.000270367 9.8029C-0.00359058 9.6437 0.0336065 9.48633 0.107986 9.3472C0.182365 9.20807 0.291205 9.09226 0.423163 9.01184C0.555121 8.93142 0.705369 8.88934 0.858249 8.88998H6.32913C6.48143 8.89061 6.6308 8.93362 6.7618 9.01455C6.89279 9.09548 7.00065 9.2114 7.07421 9.35032C7.14778 9.48923 7.18438 9.64609 7.18022 9.80468C7.17607 9.96327 7.13132 10.1178 7.0506 10.2524L4.31858 14.8052Z"
								fill="#838D94"
							/>
							<path
								d="M2.87063 1.19481C2.94729 1.06595 3.05427 0.95962 3.18142 0.88588C3.30858 0.812141 3.4517 0.773438 3.59723 0.773438C3.74276 0.773438 3.88588 0.812141 4.01304 0.88588C4.14019 0.95962 4.24717 1.06595 4.32383 1.19481L7.05927 5.74764C7.1403 5.88269 7.18508 6.0379 7.18894 6.1971C7.1928 6.3563 7.1556 6.51367 7.08122 6.6528C7.00684 6.79194 6.898 6.90774 6.76605 6.98816C6.63409 7.06858 6.48384 7.11066 6.33096 7.11002H0.860079C0.707779 7.10939 0.558406 7.06638 0.427413 6.98545C0.296419 6.90452 0.188562 6.7886 0.114998 6.64969C0.0414336 6.51077 0.00483387 6.35391 0.00898458 6.19532C0.0131353 6.03673 0.0578857 5.88218 0.138607 5.74764L2.87063 1.19481Z"
								fill="#838D94"
							/>
						</svg>
					</li>
				</ul>
			</div>
			<span className={styles.underLine}></span>
			<form className={styles.DragDrop}>
				<div className={styles.DragDrops}>
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
          <LastFile />
          <LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
          <LastFile />
          <LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
          <LastFile />
          <LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
          <LastFile />
          <LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
          <LastFile />
          <LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
          <LastFile />
          <LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
          <LastFile />
          <LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
					<LastFile />
          <LastFile />
				</div>
				{false ? (
					<div className={styles.mainText}>
						<h3 className={styles.h3}>Тут пока пустовато...</h3>
						<span className={styles.mainText}>
							Добавляйте файлы сюда, если не хотите их потерять.
						</span>
						<img src="/MyFiles.png" alt="MyFiles" />
					</div>
				) : (
					<></>
				)}
			</form>
		</div>
	);
  const handlerDragChange = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFiles([...e.dataTransfer.files]);
    }
    console.log(files);
  };

  const SetDragEnter = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const SetDragOver = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  return (
    <div className={styles.mainCont}>
      <div className={styles.upCont}>
        <div className={styles.conth2}>
          <h2 className={styles.h2}>Мои файлы</h2>
        </div>
        <span className={styles.FilesPath}>
          Медия {">"} важное {">"} 123.mp4
        </span>
        <label className={styles.mainBtn1}>
          Добавить файл
          <input
            type="file"
            multiple={true}
            style={{ visibility: "hidden", display: "none" }}
            onChange={handlerChange}
          />
        </label>
        <button className={styles.mainBtn}>удалить</button>
      </div>
      <div className={styles.FiltersCont}>
        <ul className={styles.Filters}>
          <li>
            Имя{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
            >
              <path
                d="M4.31858 14.8052C4.24192 14.934 4.13494 15.0404 4.00779 15.1141C3.88063 15.1879 3.73751 15.2266 3.59198 15.2266C3.44645 15.2266 3.30333 15.1879 3.17617 15.1141C3.04902 15.0404 2.94204 14.934 2.86538 14.8052L0.129938 10.2524C0.0489092 10.1173 0.00413132 9.9621 0.000270367 9.8029C-0.00359058 9.6437 0.0336065 9.48633 0.107986 9.3472C0.182365 9.20807 0.291205 9.09226 0.423163 9.01184C0.555121 8.93142 0.705369 8.88934 0.858249 8.88998H6.32913C6.48143 8.89061 6.6308 8.93362 6.7618 9.01455C6.89279 9.09548 7.00065 9.2114 7.07421 9.35032C7.14778 9.48923 7.18438 9.64609 7.18022 9.80468C7.17607 9.96327 7.13132 10.1178 7.0506 10.2524L4.31858 14.8052Z"
                fill="#838D94"
              />
              <path
                d="M2.87063 1.19481C2.94729 1.06595 3.05427 0.95962 3.18142 0.88588C3.30858 0.812141 3.4517 0.773438 3.59723 0.773438C3.74276 0.773438 3.88588 0.812141 4.01304 0.88588C4.14019 0.95962 4.24717 1.06595 4.32383 1.19481L7.05927 5.74764C7.1403 5.88269 7.18508 6.0379 7.18894 6.1971C7.1928 6.3563 7.1556 6.51367 7.08122 6.6528C7.00684 6.79194 6.898 6.90774 6.76605 6.98816C6.63409 7.06858 6.48384 7.11066 6.33096 7.11002H0.860079C0.707779 7.10939 0.558406 7.06638 0.427413 6.98545C0.296419 6.90452 0.188562 6.7886 0.114998 6.64969C0.0414336 6.51077 0.00483387 6.35391 0.00898458 6.19532C0.0131353 6.03673 0.0578857 5.88218 0.138607 5.74764L2.87063 1.19481Z"
                fill="#838D94"
              />
            </svg>
          </li>
          <li>
            Создано{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
            >
              <path
                d="M4.31858 14.8052C4.24192 14.934 4.13494 15.0404 4.00779 15.1141C3.88063 15.1879 3.73751 15.2266 3.59198 15.2266C3.44645 15.2266 3.30333 15.1879 3.17617 15.1141C3.04902 15.0404 2.94204 14.934 2.86538 14.8052L0.129938 10.2524C0.0489092 10.1173 0.00413132 9.9621 0.000270367 9.8029C-0.00359058 9.6437 0.0336065 9.48633 0.107986 9.3472C0.182365 9.20807 0.291205 9.09226 0.423163 9.01184C0.555121 8.93142 0.705369 8.88934 0.858249 8.88998H6.32913C6.48143 8.89061 6.6308 8.93362 6.7618 9.01455C6.89279 9.09548 7.00065 9.2114 7.07421 9.35032C7.14778 9.48923 7.18438 9.64609 7.18022 9.80468C7.17607 9.96327 7.13132 10.1178 7.0506 10.2524L4.31858 14.8052Z"
                fill="#838D94"
              />
              <path
                d="M2.87063 1.19481C2.94729 1.06595 3.05427 0.95962 3.18142 0.88588C3.30858 0.812141 3.4517 0.773438 3.59723 0.773438C3.74276 0.773438 3.88588 0.812141 4.01304 0.88588C4.14019 0.95962 4.24717 1.06595 4.32383 1.19481L7.05927 5.74764C7.1403 5.88269 7.18508 6.0379 7.18894 6.1971C7.1928 6.3563 7.1556 6.51367 7.08122 6.6528C7.00684 6.79194 6.898 6.90774 6.76605 6.98816C6.63409 7.06858 6.48384 7.11066 6.33096 7.11002H0.860079C0.707779 7.10939 0.558406 7.06638 0.427413 6.98545C0.296419 6.90452 0.188562 6.7886 0.114998 6.64969C0.0414336 6.51077 0.00483387 6.35391 0.00898458 6.19532C0.0131353 6.03673 0.0578857 5.88218 0.138607 5.74764L2.87063 1.19481Z"
                fill="#838D94"
              />
            </svg>
          </li>
          <li>
            Отправитель{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
            >
              <path
                d="M4.31858 14.8052C4.24192 14.934 4.13494 15.0404 4.00779 15.1141C3.88063 15.1879 3.73751 15.2266 3.59198 15.2266C3.44645 15.2266 3.30333 15.1879 3.17617 15.1141C3.04902 15.0404 2.94204 14.934 2.86538 14.8052L0.129938 10.2524C0.0489092 10.1173 0.00413132 9.9621 0.000270367 9.8029C-0.00359058 9.6437 0.0336065 9.48633 0.107986 9.3472C0.182365 9.20807 0.291205 9.09226 0.423163 9.01184C0.555121 8.93142 0.705369 8.88934 0.858249 8.88998H6.32913C6.48143 8.89061 6.6308 8.93362 6.7618 9.01455C6.89279 9.09548 7.00065 9.2114 7.07421 9.35032C7.14778 9.48923 7.18438 9.64609 7.18022 9.80468C7.17607 9.96327 7.13132 10.1178 7.0506 10.2524L4.31858 14.8052Z"
                fill="#838D94"
              />
              <path
                d="M2.87063 1.19481C2.94729 1.06595 3.05427 0.95962 3.18142 0.88588C3.30858 0.812141 3.4517 0.773438 3.59723 0.773438C3.74276 0.773438 3.88588 0.812141 4.01304 0.88588C4.14019 0.95962 4.24717 1.06595 4.32383 1.19481L7.05927 5.74764C7.1403 5.88269 7.18508 6.0379 7.18894 6.1971C7.1928 6.3563 7.1556 6.51367 7.08122 6.6528C7.00684 6.79194 6.898 6.90774 6.76605 6.98816C6.63409 7.06858 6.48384 7.11066 6.33096 7.11002H0.860079C0.707779 7.10939 0.558406 7.06638 0.427413 6.98545C0.296419 6.90452 0.188562 6.7886 0.114998 6.64969C0.0414336 6.51077 0.00483387 6.35391 0.00898458 6.19532C0.0131353 6.03673 0.0578857 5.88218 0.138607 5.74764L2.87063 1.19481Z"
                fill="#838D94"
              />
            </svg>
          </li>
          <li>
            Размер{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="16"
              viewBox="0 0 8 16"
              fill="none"
            >
              <path
                d="M4.31858 14.8052C4.24192 14.934 4.13494 15.0404 4.00779 15.1141C3.88063 15.1879 3.73751 15.2266 3.59198 15.2266C3.44645 15.2266 3.30333 15.1879 3.17617 15.1141C3.04902 15.0404 2.94204 14.934 2.86538 14.8052L0.129938 10.2524C0.0489092 10.1173 0.00413132 9.9621 0.000270367 9.8029C-0.00359058 9.6437 0.0336065 9.48633 0.107986 9.3472C0.182365 9.20807 0.291205 9.09226 0.423163 9.01184C0.555121 8.93142 0.705369 8.88934 0.858249 8.88998H6.32913C6.48143 8.89061 6.6308 8.93362 6.7618 9.01455C6.89279 9.09548 7.00065 9.2114 7.07421 9.35032C7.14778 9.48923 7.18438 9.64609 7.18022 9.80468C7.17607 9.96327 7.13132 10.1178 7.0506 10.2524L4.31858 14.8052Z"
                fill="#838D94"
              />
              <path
                d="M2.87063 1.19481C2.94729 1.06595 3.05427 0.95962 3.18142 0.88588C3.30858 0.812141 3.4517 0.773438 3.59723 0.773438C3.74276 0.773438 3.88588 0.812141 4.01304 0.88588C4.14019 0.95962 4.24717 1.06595 4.32383 1.19481L7.05927 5.74764C7.1403 5.88269 7.18508 6.0379 7.18894 6.1971C7.1928 6.3563 7.1556 6.51367 7.08122 6.6528C7.00684 6.79194 6.898 6.90774 6.76605 6.98816C6.63409 7.06858 6.48384 7.11066 6.33096 7.11002H0.860079C0.707779 7.10939 0.558406 7.06638 0.427413 6.98545C0.296419 6.90452 0.188562 6.7886 0.114998 6.64969C0.0414336 6.51077 0.00483387 6.35391 0.00898458 6.19532C0.0131353 6.03673 0.0578857 5.88218 0.138607 5.74764L2.87063 1.19481Z"
                fill="#838D94"
              />
            </svg>
          </li>
        </ul>
      </div>
      <span className={styles.underLine}></span>
      <form
        className={styles.DragDrop}
        style={
          dragActive
            ? {
                transition: "all .4s ease-out",
                boxShadow: "inset 0px 0px 40px rgba(0, 132, 255, 0.3)",
                borderRadius: "15px",
                height: "550px",
              }
            : { transition: "all .4s ease-out", height: "550px" }
        }
        onDrop={handlerDragChange}
        onDragEnter={SetDragEnter}
        onDragOver={SetDragEnter}
        onDragLeave={SetDragOver}
      >
        <div className={styles.mainText}>
          <h3 className={styles.h3}>Тут пока пустовато...</h3>
          <span className={styles.mainText}>
            Добавляйте файлы сюда, если не хотите их потерять.
          </span>
          <img src="/MyFiles.png" alt="MyFiles" />
        </div>
      </form>
    </div>
  );
};
