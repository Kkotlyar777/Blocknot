'use client';
import styles from "./Button.module.sass"
import { ArrSlice } from "@/app/GlobalRedux/reducer/ArrSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";

export const ButtonMain = () => {
	const { ArrCards } = useAppSelector((state) => state.ArrSlice);
	const { AddCard } = ArrSlice.actions;
	const dispatch = useAppDispatch();
    console.log(ArrCards)
	return <button className={styles.main} onClick={() => dispatch(AddCard())}>+ Добавить</button>;
};
