// styles
import styles from '@/widgets/OptionsHeader/OptionsHeader.module.sass';
import Link from 'next/link';
// elements

// Redux

export function OptionsHeader() {
	// Redux
	//===============================================================
	return (
		<div className={styles.MainCont}>
			<div className={styles.AccountOptions}>Настройки Аккаунта</div>
			<div className={styles.OptionsList}>
				<div className={styles.MainOption}>
					<Link
						href={`/Settings`}
						className={styles.Link}
					>
						Основные настройки
					</Link>
				</div>
				<div className={styles.Sub}>
					<Link
						href={`/ReferalSystem`}
						className={styles.Link}
					>
						Подписки
					</Link>
				</div>
				<div className={styles.Referal}>
					<Link
						href={`/Subscribe`}
						className={styles.Link}
					>
						Реферальная система
					</Link>
				</div>
				<div className={styles.accounts}>Счета</div>
			</div>
		</div>
	);
}
