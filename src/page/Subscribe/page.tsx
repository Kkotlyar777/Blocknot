import style from '@/page/Referal system/Referal.module.sass';
import OptionsHeader from '@/widgets/OptionsHeader';
import SidebarLayout from '@/widgets/sidebar';

export const Subscribe = () => {
	return (
		<div className={style.MainCont}>
			<SidebarLayout />
			<div className={style.MainContentLayout}>
				<OptionsHeader />
				<div className={style.MainContent}></div>
			</div>
		</div>
	);
};
