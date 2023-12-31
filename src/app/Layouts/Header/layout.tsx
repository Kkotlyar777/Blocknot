'use client';

import styles from './header.module.sass';
import { useAppSelector } from '../../hooks/redux';

export default function HeaderLayout() {
	const { numPage } = useAppSelector((state) => state.userReducer);
	return (
		<div
			className={styles.header}
			style={numPage === 4 ? { width: '80%' } : { width: '100%' }}
		>
			<div className={styles.cont}>
				<div className={styles.mainTitle}>Мой Блокнот</div>
			</div>
			<div className={styles.btns}>
				<div className={styles.search}>
					<img src="./search.png" alt="search" />
					<input type="search" placeholder="Найти что угодно здесь" />
				</div>
				<button className={styles.headerBtn}>
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
				<button className={styles.headerBtn}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						viewBox="0 0 14 14"
						fill="#051F61"
					>
						<g clip-path="url(#clip0_1222_36841)">
							<path
								d="M5.23004 2.25L5.66004 1.14C5.73256 0.952064 5.86015 0.790411 6.02609 0.676212C6.19204 0.562014 6.3886 0.500595 6.59004 0.5H7.41004C7.61148 0.500595 7.80805 0.562014 7.97399 0.676212C8.13994 0.790411 8.26752 0.952064 8.34004 1.14L8.77004 2.25L10.23 3.09L11.41 2.91C11.6065 2.88333 11.8065 2.91567 11.9846 3.00292C12.1626 3.09017 12.3107 3.22838 12.41 3.4L12.81 4.1C12.9125 4.27435 12.9598 4.47568 12.9455 4.67742C12.9312 4.87916 12.8561 5.07183 12.73 5.23L12 6.16V7.84L12.75 8.77C12.8761 8.92817 12.9512 9.12084 12.9655 9.32258C12.9798 9.52432 12.9325 9.72565 12.83 9.9L12.43 10.6C12.3307 10.7716 12.1826 10.9098 12.0046 10.9971C11.8265 11.0843 11.6265 11.1167 11.43 11.09L10.25 10.91L8.79004 11.75L8.36004 12.86C8.28752 13.0479 8.15994 13.2096 7.99399 13.3238C7.82805 13.438 7.63148 13.4994 7.43004 13.5H6.59004C6.3886 13.4994 6.19204 13.438 6.02609 13.3238C5.86015 13.2096 5.73256 13.0479 5.66004 12.86L5.23004 11.75L3.77004 10.91L2.59004 11.09C2.39356 11.1167 2.19358 11.0843 2.01552 10.9971C1.83747 10.9098 1.68937 10.7716 1.59004 10.6L1.19004 9.9C1.08754 9.72565 1.04032 9.52432 1.0546 9.32258C1.06888 9.12084 1.144 8.92817 1.27004 8.77L2.00004 7.84V6.16L1.25004 5.23C1.124 5.07183 1.04888 4.87916 1.0346 4.67742C1.02032 4.47568 1.06754 4.27435 1.17004 4.1L1.57004 3.4C1.66937 3.22838 1.81747 3.09017 1.99552 3.00292C2.17358 2.91567 2.37356 2.88333 2.57004 2.91L3.75004 3.09L5.23004 2.25ZM5.00004 7C5.00004 7.39556 5.11734 7.78224 5.3371 8.11114C5.55687 8.44004 5.86922 8.69638 6.23467 8.84776C6.60013 8.99913 7.00226 9.03874 7.39022 8.96157C7.77818 8.8844 8.13455 8.69392 8.41426 8.41421C8.69396 8.13451 8.88444 7.77814 8.96161 7.39018C9.03878 7.00222 8.99918 6.60009 8.8478 6.23463C8.69643 5.86918 8.44008 5.55682 8.11118 5.33706C7.78228 5.1173 7.3956 5 7.00004 5C6.46961 5 5.9609 5.21071 5.58583 5.58579C5.21076 5.96086 5.00004 6.46957 5.00004 7Z"
								stroke="#051F61"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_1222_36841">
								<rect width="14" height="14" fill="#051F61" />
							</clipPath>
						</defs>
					</svg>
				</button>
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
