'use client';

import { useAppDispatch, useAppSelector } from '@/features/hooks/redux';
import styles from './Notification.module.sass';
import { ArrSlice } from '@/app/GlobalRedux/reducer/ArrSlice';

export const Notification = () => {
	//-------------------------------------------------
	const { NotAll, currentFileId } = useAppSelector((state) => state.ArrSlice);
	const { DelCurrentNot, CurrentElement } = ArrSlice.actions;

	const dispatch = useAppDispatch();

	//----------------------------
	return NotAll.map((Prpops: any) => {
		return (
			<div
				className={styles.card}
				key={Prpops.id}
			>
				<div className={styles.logo}>
					<img
						src='./Logo.png'
						alt=''
						style={{ width: '65%', height: '80%' }}
					/>
				</div>
				<div
					className={styles.text}
					style={
						currentFileId === Prpops.id
							? { textDecoration: 'line-through' }
							: {}
					}
				>
					{Prpops.name}
				</div>
				<input
					type='checkbox'
					checked={currentFileId !== Prpops.id ? false : true}
					className={styles.btn}
					onClick={(e) => {
						dispatch(CurrentElement(Prpops.id));
						setTimeout(
							() => dispatch(DelCurrentNot(currentFileId)),
							2000
						);
					}}
				/>
			</div>
		);
	});
};
