import style from '@/page/OptionsMain/OptionsMain.module.sass';
import OptionsHeader from '@/widgets/OptionsHeader';
import SidebarLayout from '@/widgets/sidebar';

export const OptionsMain = () => {
	return (
		<div className={style.MainCont}>
			<SidebarLayout />
			<div className={style.MainContentLayout}>
				<OptionsHeader />
				<div className={style.MainContent}>
					<div className={style.photo}>
						<div className={style.oneParam}>Фото профиля</div>
						<div className={style.twoParam}>
							<svg
								width='35.000000'
								height='35.000000'
								viewBox='0 0 35 35'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<desc>Created with Pixso.</desc>
								<defs />
								<rect
									id='Rectangle 4139'
									rx='7.000000'
									width='35.000000'
									height='35.000000'
									fill='#8E0089'
									fill-opacity='1.000000'
								/>
								<path
									id='KK'
									d='M11.01 17.038L11.451 17.038C11.6283 17.038 11.7753 17.0147 11.892 16.968C12.0087 16.9167 12.109 16.8373 12.193 16.73L14.986 13.195C15.1027 13.0457 15.224 12.943 15.35 12.887C15.4807 12.8263 15.644 12.796 15.84 12.796L17.464 12.796L14.055 17.003C13.8543 17.2597 13.6467 17.4417 13.432 17.549C13.586 17.605 13.7237 17.6843 13.845 17.787C13.971 17.885 14.09 18.0157 14.202 18.179L17.716 22.918L16.057 22.918C15.833 22.918 15.665 22.8877 15.553 22.827C15.4457 22.7617 15.3547 22.6683 15.28 22.547L12.417 18.809C12.3283 18.683 12.2257 18.5943 12.109 18.543C11.9923 18.4917 11.8243 18.466 11.605 18.466L11.01 18.466L11.01 22.918L9.127 22.918L9.127 12.796L11.01 12.796L11.01 17.038ZM20.6077 17.038L21.0487 17.038C21.226 17.038 21.373 17.0147 21.4897 16.968C21.6063 16.9167 21.7067 16.8373 21.7907 16.73L24.5837 13.195C24.7003 13.0457 24.8217 12.943 24.9477 12.887C25.0783 12.8263 25.2417 12.796 25.4377 12.796L27.0617 12.796L23.6527 17.003C23.452 17.2597 23.2443 17.4417 23.0297 17.549C23.1837 17.605 23.3213 17.6843 23.4427 17.787C23.5687 17.885 23.6877 18.0157 23.7997 18.179L27.3137 22.918L25.6547 22.918C25.4307 22.918 25.2627 22.8877 25.1507 22.827C25.0433 22.7617 24.9523 22.6683 24.8777 22.547L22.0147 18.809C21.926 18.683 21.8233 18.5943 21.7067 18.543C21.59 18.4917 21.422 18.466 21.2027 18.466L20.6077 18.466L20.6077 22.918L18.7247 22.918L18.7247 12.796L20.6077 12.796L20.6077 17.038Z'
									fill='#FFFFFF'
									fill-opacity='1.000000'
									fill-rule='evenodd'
								/>
							</svg>
							<div>изменить</div>
						</div>
					</div>
					<span className={style.Span}></span>
					<div className={style.name}>
						<div className={style.oneParam}>Имя профиля</div>
						<div className={style.twoParam}>
							<div className={style.oneParam__1}>Kirill Kotlyar</div>
							<div>изменить</div>
						</div>
					</div>
					<span className={style.Span}></span>
					<div className={style.email}>
						<div className={style.oneParam}>Адрес электронной почты</div>
						<div className={style.twoParam}>
							<div className={style.oneParam__1}>
								asdmkas123@gmail.com
							</div>
							<div>изменить</div>
						</div>
					</div>
					<span className={style.Span}></span>
					<div className={style.lang}>
						<div className={style.oneParam}>Язык</div>
						<div className={style.twoParam}>
							<div className={style.oneParam__1}>Русский</div>
							<div>изменить</div>
						</div>
					</div>
					<span className={style.Span}></span>
					<div className={style.auth}>
						<div className={style.oneParam}>
							Двухэтапная аутентификация
						</div>
						<div className={style.twoParam}>добавить</div>
					</div>
					<span className={style.Span}></span>
					<div className={style.del}>
						<div className={style.oneParam}>Удаление аккаунта</div>
						<div className={style.twoParam}>удалить</div>
					</div>
					<span className={style.Span}></span>
				</div>
			</div>
		</div>
	);
};
