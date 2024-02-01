'use client';

import { ArrSlice } from '@/app/GlobalRedux/reducer/ArrSlice';
import styles from './PopUp.module.sass';
import { useAppDispatch } from '@/features/hooks/redux';

export const PopUp = () => {
	const { SupWnd } = ArrSlice.actions;
	const dispatch = useAppDispatch();
	return (
		<div className={styles.SupportWnd}>
			<div className={styles.SvgCont}>
				<div>
					<svg
						width="26"
						height="26"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M9.93935 12.6464L7.69211 11.8973L7.69211 11.8973L7.6921 11.8973C5.3389 11.1129 4.16229 10.7207 4.16229 9.99997C4.16229 9.27921 5.3389 8.88701 7.69212 8.10261L16.2053 5.26488C17.8611 4.71295 18.689 4.43699 19.126 4.87401C19.563 5.31102 19.287 6.13892 18.7351 7.79471L15.8974 16.3079L15.8974 16.3079L15.8974 16.3079C15.113 18.6611 14.7208 19.8377 14 19.8377C13.2793 19.8377 12.8871 18.6611 12.1026 16.3079L11.3536 14.0606L15.7071 9.70708C16.0976 9.31656 16.0976 8.68339 15.7071 8.29287C15.3166 7.90234 14.6834 7.90234 14.2929 8.29287L9.93935 12.6464Z"
							fill="#222222"
						/>
					</svg>
					<span>Поддержка</span>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 28 28"
					fill="none"
					style={{ marginRight: '23px', cursor: 'pointer' }}
					onClick={() => {
						dispatch(SupWnd(false));
					}}
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
