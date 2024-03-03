import style from '@/page/Referal system/Referal.module.sass';
import OptionsHeader from '@/widgets/OptionsHeader';
import SidebarLayout from '@/widgets/sidebar';

export const Referal = () => {
	return (
		<div className={style.MainCont}>
			<SidebarLayout />
			<div className={style.MainContentLayout}>
				<OptionsHeader />
				<div className={style.MainContent}>
					<div className={style.MainTitle}>
						Рассказывайте о нас своим друзьям и получайте подарки !
					</div>
					<span className={style.TitleSpan}></span>
					<div className={style.GetPromo}>Получить промокод</div>
					<div>
						<div>Ваш промокод:</div>
						<div>abx12-123axc-asd</div>
					</div>
					<span></span>
					<div>
						<div>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle
									cx="12"
									cy="12"
									r="9"
									stroke="#33363F"
									stroke-width="2"
								/>
								<circle
									cx="12"
									cy="18"
									r="0.5"
									fill="#33363F"
									stroke="#33363F"
								/>
								<path
									d="M12 16V14.5811C12 13.6369 12.6042 12.7986 13.5 12.5V12.5C14.3958 12.2014 15 11.3631 15 10.4189V9.90569C15 8.30092 13.6991 7 12.0943 7H12C10.3431 7 9 8.34315 9 10V10"
									stroke="#33363F"
									stroke-width="2"
								/>
							</svg>
							<div>Как работает реферальная система ?</div>
						</div>
						<div></div>
						<div>
							Промокод дает человеку который его использует скидку в 5% на любой
							из тарифов и скидку 5% вам на покупку любой следущей подписки.
						</div>
					</div>
					<div>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="12" cy="12" r="9" stroke="#33363F" stroke-width="2" />
							<circle cx="12" cy="18" r="0.5" fill="#33363F" stroke="#33363F" />
							<path
								d="M12 16V14.5811C12 13.6369 12.6042 12.7986 13.5 12.5V12.5C14.3958 12.2014 15 11.3631 15 10.4189V9.90569C15 8.30092 13.6991 7 12.0943 7H12C10.3431 7 9 8.34315 9 10V10"
								stroke="#33363F"
								stroke-width="2"
							/>
						</svg>
					</div>
					<div>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="12" cy="12" r="9" stroke="#33363F" stroke-width="2" />
							<circle cx="12" cy="18" r="0.5" fill="#33363F" stroke="#33363F" />
							<path
								d="M12 16V14.5811C12 13.6369 12.6042 12.7986 13.5 12.5V12.5C14.3958 12.2014 15 11.3631 15 10.4189V9.90569C15 8.30092 13.6991 7 12.0943 7H12C10.3431 7 9 8.34315 9 10V10"
								stroke="#33363F"
								stroke-width="2"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};
