import { Metadata } from 'next';
import styles from './trash.module.sass';

export const metadata: Metadata = {
	title: 'Basket',
};

export default function basket() {
	return (
		<>
			<div className={styles.mainCont}>
				<div className={styles.leftCont}>
					<div className={styles.headCont}>
            <div className={styles.h2Div}>
              <h2 className={styles.h2}>Удаленные файлы</h2>
            </div>
						<button className={styles.mainBtn}>Восстановить</button>
					</div>

					<div className={styles.centerCont}>
						<img src="./bascket.png" alt="" />
						<span>
							Удаленные файлы не найдены. Попробуйте изменить ваши фильтры
						</span>
					</div>
				</div>

				<div className={styles.filtersCont}>
					<div className={styles.Filter}>
						<span>Начиная с</span>
						<input type="date" />
					</div>

					<div className={styles.Filter}>
						<span>Вплоть до</span>
						<input type="date" />
					</div>

					<div> 
						<span>Кем удалено</span>
						<div className={styles.search}>
							<img src="./search.png" alt="search" />
							<input type="search" placeholder="Эл. адрес или имя" />
						</div>
					</div>

					<div className={styles.Filter}>
						<span>В папке</span>
						<input name="folders" list="folders" placeholder="Все папки" />
						<datalist id="folders">
							<option value="Музыка" />
							<option value="Проекты" />
							<option value="Медиа" />
							<option value="Новый год" />
						</datalist>
					</div>

					<button>Сбросить фильтры</button>
				</div>
			</div>
		</>
	);
}
