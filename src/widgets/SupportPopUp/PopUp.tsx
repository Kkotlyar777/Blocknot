'use client';

import { useState } from 'react';
import styles from './PopUp.module.sass';

export const PopUp = ({ supOpen }) => {
	return (
		<div className={styles.SupportWnd}>
			<div className={styles.SvgCont}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 28 28"
					fill="none"
					style={{ marginRight: '23px' }}
				>
					<path
						d="M21 7L7 21"
						stroke="#222222"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M7 7L21 21"
						stroke="#222222"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
			<div className={styles.mainChat}>
				<div className={styles.msg1}>
					<img
						src="/Logo.png"
						alt="Logo"
						style={{ width: '15px', height: '20px' }}
					/>
					<span>Здраствуйте как я могу вам помочь?</span>
				</div>
				<div className={styles.msg2}>
					<div>KK</div>
					<span>Я хочу сменить тариф...</span>
				</div>
			</div>
			<div className={styles.inputCont}>
				<input
					className={styles.input}
					type="text"
					placeholder="Опишите вашу проблему здесь..."
				/>
				<span className={styles.inputUnderline}></span>
			</div>
		</div>
	);
};
