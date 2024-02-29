// styles
import styles from '@/widgets/OptionsHeader/OptionsHeader.module.sass';
// elements

// Redux

export function OptionsHeader() {
	// Redux
	//===============================================================
	return (
		<div className={styles.MainCont}>
			<div className={styles.AccountOptions}>Настройки Аккаунта</div>
			<div className={styles.OptionsList}>
				<div className={styles.MainOption}>Основные настройки</div>
				<div className={styles.Sub}>Подписки</div>
				<div className={styles.Referal}>Реферальная система</div>
				<div className={styles.accounts}>Счета</div>
			</div>
		</div>
	);
}
