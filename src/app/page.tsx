import { Metadata } from "next";
import styles from "./globalLayout.module.sass";
export const metadata: Metadata = {
  title: "Bloknot",
};

export default function Home() {
  return (
    <div className={styles.MainCont}>
      <div className={styles.topBlock}></div>
      <div className={styles.underBlock}></div>
    </div>
  );
}
