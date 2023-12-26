import styles from './sidebar.module.sass'

export default function SidebarLayout() {
  return (
    <div className={styles.sidebar}>
      <img src="/Logo.png" alt="" />
      <ul>
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
      </div>
    </div>
  );
}
