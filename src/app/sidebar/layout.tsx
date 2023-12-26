import styles from "./sidebar.module.sass";

export default function SidebarLayout() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.cont}>
        <img src="/Logo.png" alt="" />
        <ul className={styles.mainContLi}>
          <li className={styles.MainLi}>Главная</li>
          <li className={styles.FileLi}>Мои Файлы</li>
          <li className={styles.StarLi}>Избранное</li>
          <li className={styles.RequseLi}>Запрос Файлов</li>
          <li className={styles.TrechLi}>Корзина</li>
        </ul>
      </div>
      <div className={styles.underCont}></div>
    </div>
  );
}

{
  /* <ul>
        <li>Главная</li>
        <li>Мои Файлы</li>
        <li>Избранное</li>
        <li>Запрос Файлов</li>
        <li>Корзина</li>
      </ul>
      <div className={styles.leftDownDiv}>
        <img src="" alt="" />
        <span></span>
        <span></span>
        <button className={styles.btn}> Улучшить </button>
      </div> */
}
