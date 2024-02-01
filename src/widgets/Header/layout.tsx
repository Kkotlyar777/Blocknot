'use client';

// styles
import styles from './header.module.sass';
// elements
import Notification from '@/widgets/Notifications/index';
import Search from '@/widgets/Search/index';
import PopUp from '@/widgets/SupportPopUp/index';
// Redux
import { useState } from 'react';
import { useAppDispatch } from '@/features/hooks/redux';
import { MyFilesSlice } from '@/app/GlobalRedux/reducer/MyFilesSlice';
import { useAppSelector } from '@/features/hooks/redux';

export function HeaderLayout() {
	// Redux
	const { numPage } = useAppSelector((state) => state.userReducer);
	const [isOpen, setOpen] = useState(false);
	const [isSearch, setSearch] = useState(false);
	const [supOpen, setSupOpen] = useState(false);
	const dispatch = useAppDispatch();
	const { currentSearchInput } = useAppSelector((state) => state.MyFilesSlice);
	const { SetInputValue, Searching } = MyFilesSlice.actions;
	//===============================================================
	return (
		<div
			className={styles.header}
			style={numPage === 4 ? { width: '80%' } : { width: '99%' }}
			onClick={() => {
				setSearch(false), setOpen(false);
			}}
			onKeyDown={(e) => e.key === 'Escape' && setSearch(false)}
		>
			<div className={styles.cont}>
				<div className={styles.mainTitle}>Мой Блокнот</div>
			</div>
			<div className={styles.btns}>
				<div className={styles.searchField}>
					<div className={styles.search}>
						<img src="./search.png" alt="search" />
						<input
							type="search"
							placeholder="Найти любой файл здесь"
							onChange={(e) =>
								dispatch(SetInputValue(e.target.value)) &&
								dispatch(Searching(currentSearchInput))
							}
							onClick={(e) => {
								e.stopPropagation();
								setSearch(true);
							}}
						/>
					</div>
					{isSearch ? (
						<div className={styles.searchList}>
							<Search />
						</div>
					) : (
						<></>
					)}
				</div>
				<div className={styles.contBtn2}>
					{isOpen ? (
						<div
							className={styles.notification}
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							<Notification />
						</div>
					) : (
						<></>
					)}
					<button
						style={isOpen ? { marginLeft: '20px', background: '#EBF2FF' } : {}}
						className={styles.headerBtn}
						onClick={(e) => {
							e.stopPropagation();
							if (isOpen) {
								setOpen(false);
							} else {
								setOpen(true);
							}
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							viewBox="0 0 14 14"
							fill="#051F61"
						>
							<g clip-path="url(#clip0_1222_37757)">
								<path
									d="M6 13.25H8"
									stroke="#051F61"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M11 5.75C11 4.68913 10.5786 3.67172 9.82843 2.92157C9.07828 2.17143 8.06087 1.75 7 1.75C5.93913 1.75 4.92172 2.17143 4.17157 2.92157C3.42143 3.67172 3 4.68913 3 5.75V9.25C3 9.64782 2.84196 10.0294 2.56066 10.3107C2.27936 10.592 1.89782 10.75 1.5 10.75H12.5C12.1022 10.75 11.7206 10.592 11.4393 10.3107C11.158 10.0294 11 9.64782 11 9.25V5.75Z"
									stroke="#051F61"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M0.5 5.62C0.500539 4.66814 0.727534 3.73007 1.16224 2.88327C1.59694 2.03647 2.22687 1.30525 3 0.75"
									stroke="#051F61"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M13.5 5.62C13.4995 4.66814 13.2725 3.73007 12.8378 2.88327C12.4031 2.03647 11.7731 1.30525 11 0.75"
									stroke="#051F61"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_1222_37757">
									<rect width="14" height="14" fill="#051F61" />
								</clipPath>
							</defs>
						</svg>
					</button>
				</div>

				<button
					className={styles.headerBtn}
					onClick={() => {
						if (supOpen) {
							setSupOpen(false);
						} else {
							setSupOpen(true);
						}
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="33"
						height="33"
						viewBox="0 0 24 24"
						fill="none"
					>
						<circle cx="12" cy="12" r="9" stroke="#33363F" stroke-width="2" />
						<circle cx="12" cy="18" r="0.5" fill="#33363F" stroke="#33363F" />
						<path
							d="M12 16V14.5811C12 13.6369 12.6042 12.7986 13.5 12.5V12.5C14.3958 12.2014 15 11.3631 15 10.4189V9.90569C15 8.30092 13.6991 7 12.0943 7H12C10.3431 7 9 8.34315 9 10V10"
							stroke="#33363F"
							stroke-width="2"
						/>
					</svg>
				</button>
				{supOpen ? <PopUp /> : <></>}
				<button className={styles.headerBtnProfile}>
					<img
						src="./profile.jpg"
						alt="profile photo"
						style={{ width: '100%', height: '100%', borderRadius: '8px' }}
					/>
				</button>
			</div>
		</div>
	);
}
