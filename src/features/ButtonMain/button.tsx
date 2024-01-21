"use client";
import styles from "./Button.module.sass";
import { ArrSlice } from "@/app/GlobalRedux/reducer/ArrSlice";
import { useAppDispatch, useAppSelector } from "@/features/hooks/redux";

export const ButtonMain = () => {
  // получение actions
  const { AddCard } = ArrSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <button
      className={styles.main}
      // создание новой карточки
      onClick={() => dispatch(AddCard())}
    >
      + Добавить
    </button>
  );
};
