import { Metadata } from "next";
import styles from "./globalLayout.module.sass";
import { CardComp } from "./components/CardFiles/Card";
import { LastFile } from "./components/lastFiles/LastFiles";
export const metadata: Metadata = {
  title: "Bloknot",
};

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
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </div>
      </div>
      <h2 className={styles.secondTitle}>Последние файлы</h2>
      <div className={styles.underBlock}>
        <div className={styles.lastFiles}>
          <LastFile/>
          <LastFile/>
          <LastFile/>
        </div>
      </div>
    </div>
  );
}
