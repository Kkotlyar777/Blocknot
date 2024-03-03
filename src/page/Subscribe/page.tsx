import style from '@/page/Subscribe/Subscribe.module.sass';
import OptionsHeader from '@/widgets/OptionsHeader';
import SidebarLayout from '@/widgets/sidebar';

export const Subscribe = () => {
	return (
		<div className={style.MainCont}>
			<SidebarLayout />
			<div className={style.MainContentLayout}>
				<OptionsHeader />
				<div className={style.MainContent}>
					<div className={style.cub}>
						<img src='/Logo.png' />
						<div className={style.textCont}>
							<div className={style.price}>
								<div className={style.toptext}>150 ₽/мес</div>
								<div className={style.undertext}>ВСЕ ЗА 150</div>
								<div className={style.info}>
									*У вас есть 150 ГБ места, чтобы хранить свои файлы .
								</div>
							</div>
						</div>
						<button className={style.btn}>Улучшить</button>
					</div>
				</div>
			</div>
		</div>
	);
};
