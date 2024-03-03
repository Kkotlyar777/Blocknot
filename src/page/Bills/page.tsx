import style from '@/page/Bills/Bills.module.sass';
import OptionsHeader from '@/widgets/OptionsHeader';
import SidebarLayout from '@/widgets/sidebar';

export const Bills = () => {
	return (
		<div className={style.MainCont}>
			<SidebarLayout />
			<div className={style.MainContentLayout}>
				<OptionsHeader />
				<div className={style.MainContent}>
					<div className={style.Title}>
						Нет событий, связанных с платежами или выставлением счетов.
					</div>
					<img src="/Bills.png" alt="" />
				</div>
			</div>
		</div>
	);
};
