import { Metadata } from 'next';
import styles from './globalLayout.module.sass';
import stylesCard from './components/CardFiles/Card.module.sass';
import { CardComp } from './components/CardFiles/Card';
import { LastFile } from './components/lastFiles/LastFiles';
import stylesCardLast from './components/lastFiles/Files.module.sass';
export const metadata: Metadata = {
	title: 'Bloknot',
};
// будет получатьсбя с бэка
// добавить типизацию
const ArrCard: any = [
	{ name: 'Документы', date: 'Nov 15, 2021, 09:45 AM', fileNums: 1.322 },
	{ name: 'Фото', date: ' Jan 7, 2022, 03:30 PM', fileNums: 8.442 },
	{ name: 'Новый год22', date: 'Mar 20, 2022, 10:15 AM', fileNums: 1.0 },
	{ name: 'Старый Год 33', date: 'Apr 5, 2022, 01:00 PM', fileNums: 1.235 },
	{ name: 'Откаты на форум', date: 'Feb 12, 2022, 05:55 PM', fileNums: 7.381 },
	{ name: 'Очень секретно', date: 'May 25, 2022, 11:20 AM', fileNums: 3.515 },
	{ name: 'Git', date: 'Jul 8, 2022, 08:10 AM', fileNums: 7.962 },
];

export default function Home() {
	return (
		<div className={styles.MainCont}>
			<div className={styles.topBlock}>
				<div className={styles.Text}>
					<div className={styles.textOne}>Все файлы</div>
					<div className={styles.textCont}>
						<div className={styles.textTwo}>Добро пожаловать, Михаил! 👋 </div>
					</div>
					<button className={styles.btn}>+ Добавить </button>
				</div>
				<div className={styles.CardArr}>
					{ArrCard.map((Prpops: any) => {
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
					})}
				</div>
			</div>
			<h2 className={styles.secondTitle}>Последние файлы</h2>
			<div className={styles.underBlock}>
				<div className={styles.underBlockFilter}>
					<span className={styles.filterOne}>
						Название
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
					</span>
					<span className={styles.filterTwo}>
						Поделиться
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
					</span>
					<span className={styles.filterThree}>
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
					</span>
					<span className={styles.filterFour}>
						Последние изменения
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
					</span>
				</div>
				<span className={styles.underline}></span>
				<div className={styles.lastFiles}>
					{ArrCard.map((Prpops: any) => {
						return (
							<div className={stylesCardLast.LastFile}>
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
                  <span className={stylesCardLast.fileName}>{Prpops.name}</span>
								</div>
								<div>
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
								<span className={stylesCardLast.fileDate}>{Prpops.date}</span>
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
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
