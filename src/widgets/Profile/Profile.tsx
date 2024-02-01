import Link from 'next/link';
import { IProfileProps } from './ts';
import style from '@/widgets/Profile/Profile.module.sass';
const Profile = () => {
	return (
		<div className={style.Profile}>
			<div className={style.Main}>
				<svg
					width="35.000000"
					height="35.000000"
					viewBox="0 0 35 35"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<desc>Created with Pixso.</desc>
					<defs />
					<rect
						id="Rectangle 4139"
						rx="7.000000"
						width="35.000000"
						height="35.000000"
						fill="#8E0089"
						fill-opacity="1.000000"
					/>
					<path
						id="KK"
						d="M11.01 17.038L11.451 17.038C11.6283 17.038 11.7753 17.0147 11.892 16.968C12.0087 16.9167 12.109 16.8373 12.193 16.73L14.986 13.195C15.1027 13.0457 15.224 12.943 15.35 12.887C15.4807 12.8263 15.644 12.796 15.84 12.796L17.464 12.796L14.055 17.003C13.8543 17.2597 13.6467 17.4417 13.432 17.549C13.586 17.605 13.7237 17.6843 13.845 17.787C13.971 17.885 14.09 18.0157 14.202 18.179L17.716 22.918L16.057 22.918C15.833 22.918 15.665 22.8877 15.553 22.827C15.4457 22.7617 15.3547 22.6683 15.28 22.547L12.417 18.809C12.3283 18.683 12.2257 18.5943 12.109 18.543C11.9923 18.4917 11.8243 18.466 11.605 18.466L11.01 18.466L11.01 22.918L9.127 22.918L9.127 12.796L11.01 12.796L11.01 17.038ZM20.6077 17.038L21.0487 17.038C21.226 17.038 21.373 17.0147 21.4897 16.968C21.6063 16.9167 21.7067 16.8373 21.7907 16.73L24.5837 13.195C24.7003 13.0457 24.8217 12.943 24.9477 12.887C25.0783 12.8263 25.2417 12.796 25.4377 12.796L27.0617 12.796L23.6527 17.003C23.452 17.2597 23.2443 17.4417 23.0297 17.549C23.1837 17.605 23.3213 17.6843 23.4427 17.787C23.5687 17.885 23.6877 18.0157 23.7997 18.179L27.3137 22.918L25.6547 22.918C25.4307 22.918 25.2627 22.8877 25.1507 22.827C25.0433 22.7617 24.9523 22.6683 24.8777 22.547L22.0147 18.809C21.926 18.683 21.8233 18.5943 21.7067 18.543C21.59 18.4917 21.422 18.466 21.2027 18.466L20.6077 18.466L20.6077 22.918L18.7247 22.918L18.7247 12.796L20.6077 12.796L20.6077 17.038Z"
						fill="#FFFFFF"
						fill-opacity="1.000000"
						fill-rule="evenodd"
					/>
				</svg>
				<div className={style.cont}>
					<div className={style.el1}>Kirill Kotlyar</div>
					<div className={style.email}>asdmkas123@gmail.com</div>
				</div>
			</div>
			<div className={style.Tarif}>
				<div className={style.el1}>В вашем тарифе доступно 100ГБ места</div>
				<div className={style.chose}><Link href={`/Prices`} style={{textDecoration:'none', color:'black'}}>Сменить тариф</Link></div>
			</div>
			<span className={style.line}></span>
			<div className={style.cont}>
				<div className={style.Blocknot}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.66623 17.3147C6.86267 16.3045 7.49257 15.3597 8.47907 14.6671C9.467 13.9736 10.7355 13.5893 12.0549 13.6002C13.3743 13.6112 14.6325 14.0165 15.6024 14.7255C16.5708 15.4333 17.1772 16.3871 17.3492 17.3994"
							stroke="#222222"
							stroke-width="1.2"
							stroke-linecap="round"
						/>
						<circle
							cx="12"
							cy="9"
							r="2.4"
							stroke="#222222"
							stroke-width="1.2"
							stroke-linecap="round"
						/>
					</svg>
					Мой Блокнот
				</div>
				<div className={style.theme}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14 10L10 14"
							stroke="#222222"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M16 13L18 11C19.3807 9.61929 19.3807 7.38071 18 6V6C16.6193 4.61929 14.3807 4.61929 13 6L11 8M8 11L6 13C4.61929 14.3807 4.61929 16.6193 6 18V18C7.38071 19.3807 9.61929 19.3807 11 18L13 16"
							stroke="#222222"
							stroke-linecap="round"
						/>
					</svg>
					Реферальная система
				</div>
				<div className={style.theme}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.4349 19.9775L13.4747 19.4791L13.4349 19.9775ZM11.7155 19.4863L12.2035 19.3776L11.7155 19.4863ZM13.9404 6.21305L14.2222 5.80003L13.9404 6.21305ZM20.5 13C20.5 9.41015 17.5899 6.5 14 6.5V5.5C18.1421 5.5 21.5 8.85786 21.5 13H20.5ZM14 19.5C17.5899 19.5 20.5 16.5899 20.5 13H21.5C21.5 17.1421 18.1421 20.5 14 20.5V19.5ZM13.4747 19.4791C13.6479 19.4929 13.8231 19.5 14 19.5V20.5C13.7965 20.5 13.5947 20.4919 13.3951 20.4759L13.4747 19.4791ZM13.2135 17.6509C15.1776 16.5315 16.5 14.4196 16.5 11.9995H17.5C17.5 14.7933 15.9721 17.2297 13.7087 18.5197L13.2135 17.6509ZM16.5 11.9995C16.5 9.76698 15.375 7.79713 13.6586 6.62607L14.2222 5.80003C16.1999 7.14942 17.5 9.42255 17.5 11.9995H16.5ZM13.3951 20.4759C12.8671 20.4338 12.4103 20.3987 12.0806 20.3209C11.7653 20.2464 11.3352 20.0786 11.2275 19.595L12.2035 19.3776C12.1761 19.2543 12.0593 19.2884 12.3104 19.3476C12.5472 19.4036 12.91 19.434 13.4747 19.4791L13.3951 20.4759ZM13.7087 18.5197C13.0872 18.874 12.6637 19.1164 12.3998 19.3123C12.2677 19.4104 12.2131 19.4702 12.1949 19.4966C12.1858 19.5098 12.2216 19.4586 12.2035 19.3776L11.2275 19.595C11.1693 19.3338 11.251 19.1041 11.3715 18.9292C11.4829 18.7675 11.6415 18.6298 11.8037 18.5094C12.1284 18.2683 12.6178 17.9904 13.2135 17.6509L13.7087 18.5197ZM14 6.5C14.1966 6.5 14.3351 6.35807 14.3744 6.21479C14.4123 6.07668 14.3702 5.90097 14.2222 5.80003L13.6586 6.62607C13.4166 6.46096 13.3473 6.17873 13.4101 5.95013C13.4742 5.71637 13.6895 5.5 14 5.5V6.5Z"
							fill="#222222"
						/>
						<path
							d="M7.4 11.2L7.4 11.2C7.50137 11.5041 7.55206 11.6562 7.60276 11.7225C7.80288 11.9843 8.19712 11.9843 8.39724 11.7225C8.44794 11.6562 8.49863 11.5041 8.6 11.2L8.6 11.2C8.68177 10.9547 8.72266 10.832 8.77555 10.721C8.97291 10.3067 9.30672 9.97291 9.72099 9.77555C9.83201 9.72266 9.95468 9.68177 10.2 9.6L10.2 9.6C10.5041 9.49863 10.6562 9.44794 10.7225 9.39724C10.9843 9.19712 10.9843 8.80288 10.7225 8.60276C10.6562 8.55206 10.5041 8.50137 10.2 8.4L10.2 8.4C9.95468 8.31822 9.83201 8.27734 9.72099 8.22445C9.30672 8.02709 8.97291 7.69329 8.77555 7.27901C8.72266 7.16799 8.68177 7.04532 8.6 6.8C8.49863 6.49588 8.44794 6.34382 8.39724 6.2775C8.19712 6.01569 7.80288 6.01569 7.60276 6.2775C7.55206 6.34382 7.50137 6.49588 7.4 6.8C7.31823 7.04532 7.27734 7.16799 7.22445 7.27901C7.02709 7.69329 6.69329 8.02709 6.27901 8.22445C6.16799 8.27734 6.04532 8.31823 5.8 8.4C5.49588 8.50137 5.34382 8.55206 5.2775 8.60276C5.01569 8.80288 5.01569 9.19712 5.2775 9.39724C5.34382 9.44794 5.49588 9.49863 5.8 9.6C6.04532 9.68177 6.16799 9.72266 6.27901 9.77555C6.69329 9.97291 7.02709 10.3067 7.22445 10.721C7.27734 10.832 7.31822 10.9547 7.4 11.2Z"
							stroke="#222222"
						/>
					</svg>
					Сменить тему
				</div>
				<div className={style.langth}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="12" cy="12" r="7.5" stroke="#222222" />
						<path
							d="M14.5 12C14.5 14.1651 14.1701 16.1029 13.6532 17.4813C13.394 18.1723 13.0975 18.6969 12.7936 19.0396C12.4892 19.383 12.2199 19.5 12 19.5C11.7801 19.5 11.5108 19.383 11.2064 19.0396C10.9025 18.6969 10.606 18.1723 10.3468 17.4813C9.82994 16.1029 9.5 14.1651 9.5 12C9.5 9.83494 9.82994 7.89713 10.3468 6.51871C10.606 5.82765 10.9025 5.30314 11.2064 4.96038C11.5108 4.61704 11.7801 4.5 12 4.5C12.2199 4.5 12.4892 4.61704 12.7936 4.96038C13.0975 5.30314 13.394 5.82765 13.6532 6.51871C14.1701 7.89713 14.5 9.83494 14.5 12Z"
							stroke="#222222"
						/>
						<path d="M4.5 12H19.5" stroke="#33363F" stroke-linecap="round" />
					</svg>
					Сменить язык
				</div>
				<div className={style.options}>
					<svg
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12.3691 2.94126L12.8666 2.89151V2.89151L12.3691 2.94126ZM12.2887 2.41918L11.8169 2.58459V2.58459L12.2887 2.41918ZM12.5227 3.87373L12.9734 3.6572V3.6572L12.5227 3.87373ZM13.7552 4.38425L13.5896 3.91247L13.5896 3.91247L13.7552 4.38425ZM14.5231 3.83349L14.8398 4.22048L14.8432 4.2176L14.5231 3.83349ZM14.5231 3.83348L14.2065 3.44649L14.2031 3.44937L14.5231 3.83348ZM14.9492 3.5212L15.1658 3.97181L14.9492 3.5212ZM15.9034 3.56879L16.1639 3.14198L16.1639 3.14198L15.9034 3.56879ZM16.2963 3.92192L16.6498 3.56837V3.56837L16.2963 3.92192ZM17.078 4.70371L16.7245 5.05726L16.7363 5.06903L16.7488 5.08L17.078 4.70371ZM17.078 4.70371L17.4316 4.35016L17.4198 4.33839L17.4073 4.32743L17.078 4.70371ZM17.4312 5.09655L17.858 4.83611V4.83611L17.4312 5.09655ZM17.4788 6.05081L17.0282 5.83412L17.0282 5.83413L17.4788 6.05081ZM17.1665 6.47683L17.5402 6.80901L17.547 6.80136L17.5535 6.79344L17.1665 6.47683ZM17.1665 6.47684L16.7928 6.14466L16.786 6.1523L16.7795 6.16022L17.1665 6.47684ZM16.6157 7.2448L16.1439 7.07922L16.1439 7.07923L16.6157 7.2448ZM17.1262 8.4773L17.3427 8.02662H17.3427L17.1262 8.4773ZM18.0587 8.63087L18.1085 8.13335V8.13335L18.0587 8.63087ZM18.5808 8.7113L18.7463 8.23945L18.5808 8.7113ZM19.2219 9.4197L19.7079 9.30205L19.7079 9.30205L19.2219 9.4197ZM19.2219 11.5802L18.736 11.4626L18.736 11.4626L19.2219 11.5802ZM18.5807 12.2887L18.4154 11.8169L18.4154 11.8169L18.5807 12.2887ZM18.0588 12.3691L18.009 11.8716L18.0588 12.3691ZM17.1267 12.5226L17.3432 12.9733L17.3432 12.9733L17.1267 12.5226ZM16.6161 13.7553L16.1443 13.921V13.921L16.6161 13.7553ZM17.1666 14.5229L16.7796 14.8395L16.7796 14.8395L17.1666 14.5229ZM17.4788 14.9487L17.0282 15.1654L17.0282 15.1654L17.4788 14.9487ZM17.4312 15.9032L17.0044 15.6427L17.0044 15.6427L17.4312 15.9032ZM17.0782 16.2958L17.4318 16.6493L17.4318 16.6493L17.0782 16.2958ZM17.0782 16.2958L17.4317 16.6494L17.0782 16.2958ZM16.2963 17.0777L15.9427 16.7241L16.2963 17.0777ZM15.9035 17.4308L16.1639 17.8576L15.9035 17.4308ZM14.9492 17.4784L14.7325 17.929L14.7325 17.929L14.9492 17.4784ZM14.5232 17.1661L14.8398 16.7791L14.8209 16.7637L14.8005 16.7501L14.5232 17.1661ZM14.5232 17.1661L14.2065 17.5531L14.2255 17.5686L14.2458 17.5821L14.5232 17.1661ZM13.7552 16.6154L13.5897 17.0871H13.5897L13.7552 16.6154ZM12.5227 17.1259L12.072 16.9094L12.5227 17.1259ZM12.3691 18.0585L12.8667 18.1083L12.3691 18.0585ZM12.3691 18.0586L12.8667 18.1083V18.1083L12.3691 18.0586ZM12.2887 18.5809L11.8168 18.4155V18.4155L12.2887 18.5809ZM11.5804 19.2219L11.6981 19.7079L11.6981 19.7079L11.5804 19.2219ZM9.4197 19.2219L9.30205 19.7079H9.30205L9.4197 19.2219ZM8.7113 18.5808L9.18314 18.4154L9.18314 18.4154L8.7113 18.5808ZM8.63087 18.0587L9.12839 18.009V18.009L8.63087 18.0587ZM8.4773 17.1262L8.92798 16.9097L8.92798 16.9097L8.4773 17.1262ZM7.24481 16.6157L7.41038 17.0875H7.41038L7.24481 16.6157ZM6.47682 17.1665L6.78919 17.557L6.79344 17.5535L6.47682 17.1665ZM6.47682 17.1665L6.77682 17.5665L6.78306 17.5618L6.78916 17.5569L6.47682 17.1665ZM6.4768 17.1665L6.1768 16.7665L6.16836 16.7728L6.16018 16.7795L6.4768 17.1665ZM6.05075 17.4788L5.83408 17.0282L5.83408 17.0282L6.05075 17.4788ZM5.09653 17.4312L5.35696 17.0044L5.35696 17.0044L5.09653 17.4312ZM4.70366 17.0781L4.32737 17.4073L4.33834 17.4199L4.35011 17.4316L4.70366 17.0781ZM4.70366 17.0781L5.07995 16.7488L5.06898 16.7363L5.05721 16.7245L4.70366 17.0781ZM3.9219 16.2963L3.56834 16.6499H3.56834L3.9219 16.2963ZM3.56875 15.9035L3.99556 15.643L3.99556 15.643L3.56875 15.9035ZM3.52115 14.9492L3.07054 14.7325H3.07054L3.52115 14.9492ZM3.83346 14.5232L3.45717 14.1939L3.45172 14.2001L3.44648 14.2065L3.83346 14.5232ZM3.83347 14.5232L4.20975 14.8524L4.2152 14.8462L4.22044 14.8398L3.83347 14.5232ZM4.38425 13.7552L3.91246 13.5896L4.38425 13.7552ZM3.87372 12.5227L4.09025 12.072L4.09025 12.072L3.87372 12.5227ZM2.94125 12.3691L2.991 11.8716L2.96619 11.8691H2.94125V12.3691ZM2.94124 12.3691L2.89148 12.8666L2.9163 12.8691H2.94124V12.3691ZM2.41918 12.2887L2.25377 12.7606L2.25377 12.7606L2.41918 12.2887ZM1.77807 11.5803L2.26404 11.4626H2.26404L1.77807 11.5803ZM1.75 11.0528H2.25H1.75ZM1.75 9.9473H2.25H1.75ZM1.77809 9.41963L2.26405 9.53731L2.26405 9.53731L1.77809 9.41963ZM2.4191 8.71132L2.58455 9.18315L2.58455 9.18315L2.4191 8.71132ZM2.94136 8.63086L2.99111 9.12838H2.99111L2.94136 8.63086ZM3.87417 8.47722L3.65758 8.02657H3.65758L3.87417 8.47722ZM4.38462 7.24488L3.91281 7.4104L3.91281 7.4104L4.38462 7.24488ZM3.83362 6.47659L3.44664 6.79321L3.44664 6.79321L3.83362 6.47659ZM3.52114 6.05029L3.97178 5.83367L3.52114 6.05029ZM3.56872 5.09626L3.14188 4.83587L3.14188 4.83587L3.56872 5.09626ZM3.92204 4.7032L3.56849 4.34965H3.56849L3.92204 4.7032ZM4.7037 3.92154L4.35015 3.56799L4.35015 3.56799L4.7037 3.92154ZM5.09656 3.56838L4.83613 3.14157L4.83613 3.14157L5.09656 3.56838ZM6.05079 3.52079L6.26747 3.07018L6.26747 3.07018L6.05079 3.52079ZM6.47692 3.83316L6.79702 3.44904L6.79354 3.44618L6.47692 3.83316ZM6.47692 3.83317L6.15682 4.21729L6.1603 4.22015L6.47692 3.83317ZM7.24471 4.38387L7.41034 3.9121L7.41034 3.9121L7.24471 4.38387ZM8.4774 3.87327L8.92812 4.08974L8.92812 4.08974L8.4774 3.87327ZM8.63089 2.94115L9.1284 2.9909L9.13089 2.96609V2.94115H8.63089ZM8.63089 2.94114L8.13349 2.89013L8.13089 2.91557V2.94114H8.63089ZM8.63089 2.94113L9.12828 2.99214L9.12841 2.99088L8.63089 2.94113ZM8.71126 2.41927L9.18313 2.58463L9.18313 2.58463L8.71126 2.41927ZM9.4198 1.77805L9.53739 2.26403L9.53739 2.26403L9.4198 1.77805ZM11.5803 1.77807L11.4627 2.26404V2.26404L11.5803 1.77807ZM12.8666 2.89151C12.8422 2.64656 12.8247 2.43666 12.7606 2.25377L11.8169 2.58459C11.8317 2.62689 11.8415 2.68998 11.8716 2.99101L12.8666 2.89151ZM12.9734 3.6572C12.9687 3.64756 12.9518 3.60416 12.9311 3.46703C12.911 3.3335 12.893 3.15474 12.8666 2.89151L11.8716 2.99101C11.8969 3.24373 11.9176 3.45194 11.9423 3.61602C11.9664 3.7765 12.0005 3.94135 12.072 4.09025L12.9734 3.6572ZM13.5896 3.91247C13.3492 3.99686 13.0837 3.8869 12.9734 3.6572L12.072 4.09025C12.4031 4.77935 13.1994 5.10921 13.9208 4.85604L13.5896 3.91247ZM14.2065 3.44651C14.0018 3.61403 13.8626 3.72769 13.754 3.80788C13.6424 3.89023 13.5997 3.90892 13.5896 3.91247L13.9208 4.85604C14.0767 4.80134 14.2173 4.70882 14.3479 4.61244C14.4814 4.5139 14.6432 4.3813 14.8398 4.22047L14.2065 3.44651ZM14.2031 3.44937L14.203 3.44938L14.8432 4.2176L14.8432 4.21759L14.2031 3.44937ZM14.7325 3.07059C14.5578 3.15458 14.397 3.29063 14.2065 3.4465L14.8398 4.22046C15.0739 4.02889 15.1255 3.99123 15.1658 3.97181L14.7325 3.07059ZM16.1639 3.14198C15.7297 2.87704 15.1908 2.85017 14.7325 3.07059L15.1658 3.97181C15.3186 3.89833 15.4983 3.90729 15.643 3.9956L16.1639 3.14198ZM16.6498 3.56837C16.4757 3.39431 16.3293 3.24293 16.1639 3.14198L15.643 3.9956C15.6812 4.01895 15.7288 4.06156 15.9427 4.27548L16.6498 3.56837ZM17.4316 4.35016L16.6498 3.56837L15.9427 4.27548L16.7245 5.05726L17.4316 4.35016ZM17.4073 4.32743L17.4073 4.32742L16.7488 5.08L16.7488 5.08L17.4073 4.32743ZM17.858 4.83611C17.757 4.67067 17.6057 4.52422 17.4316 4.35016L16.7245 5.05727C16.9384 5.27119 16.981 5.31874 17.0044 5.357L17.858 4.83611ZM17.9294 6.26749C18.1498 5.80911 18.1229 5.27027 17.858 4.83611L17.0044 5.357C17.0927 5.50172 17.1016 5.68133 17.0282 5.83412L17.9294 6.26749ZM17.5535 6.79344C17.7093 6.60293 17.8454 6.44215 17.9294 6.26749L17.0282 5.83413C17.0087 5.87452 16.9711 5.92607 16.7795 6.16021L17.5535 6.79344ZM17.5402 6.80902L17.5402 6.80901L16.7928 6.14464L16.7928 6.14466L17.5402 6.80902ZM17.0875 7.41037C17.091 7.40028 17.1097 7.35759 17.1921 7.24601C17.2723 7.13736 17.3859 6.99821 17.5535 6.79346L16.7795 6.16022C16.6187 6.3568 16.4861 6.51864 16.3875 6.65214C16.2911 6.78272 16.1986 6.92335 16.1439 7.07922L17.0875 7.41037ZM17.3427 8.02662C17.113 7.91627 17.0031 7.65082 17.0875 7.41037L16.1439 7.07923C15.8907 7.80058 16.2206 8.59692 16.9097 8.92799L17.3427 8.02662ZM18.1085 8.13335C17.8452 8.10703 17.6665 8.089 17.5329 8.06888C17.3958 8.04822 17.3524 8.03125 17.3427 8.02662L16.9097 8.92799C17.0586 8.99953 17.2234 9.03354 17.3839 9.05772C17.548 9.08244 17.7562 9.10312 18.009 9.12839L18.1085 8.13335ZM18.7463 8.23945C18.5633 8.17533 18.3534 8.15785 18.1085 8.13335L18.009 9.12839C18.31 9.1585 18.3731 9.16831 18.4154 9.18314L18.7463 8.23945ZM19.7079 9.30205C19.5882 8.80773 19.2262 8.40772 18.7463 8.23945L18.4154 9.18314C18.5754 9.23923 18.6961 9.37257 18.736 9.53734L19.7079 9.30205ZM19.75 9.94721C19.75 9.70104 19.7535 9.49043 19.7079 9.30205L18.736 9.53734C18.7465 9.5809 18.75 9.64466 18.75 9.94721H19.75ZM19.75 11.0529V9.94721H18.75V11.0529H19.75ZM19.7079 11.6978C19.7535 11.5095 19.75 11.299 19.75 11.0529H18.75C18.75 11.3553 18.7465 11.4191 18.736 11.4626L19.7079 11.6978ZM18.7461 12.7606C19.2262 12.5923 19.5883 12.1922 19.7079 11.6978L18.736 11.4626C18.6961 11.6274 18.5754 11.7608 18.4154 11.8169L18.7461 12.7606ZM18.1086 12.8666C18.3534 12.8421 18.5633 12.8247 18.7461 12.7606L18.4154 11.8169C18.3731 11.8317 18.31 11.8415 18.009 11.8716L18.1086 12.8666ZM17.3432 12.9733C17.3528 12.9687 17.3962 12.9517 17.5332 12.9311C17.6667 12.911 17.8454 12.893 18.1086 12.8666L18.009 11.8716C17.7564 11.8969 17.5483 11.9175 17.3843 11.9422C17.2239 11.9664 17.0591 12.0004 16.9103 12.0719L17.3432 12.9733ZM17.0878 13.5897C17.0034 13.3492 17.1134 13.0837 17.3432 12.9733L16.9103 12.0719C16.2209 12.4029 15.891 13.1995 16.1443 13.921L17.0878 13.5897ZM17.5536 14.2063C17.3861 14.0016 17.2725 13.8625 17.1924 13.754C17.1101 13.6424 17.0914 13.5998 17.0878 13.5897L16.1443 13.921C16.199 14.0768 16.2915 14.2173 16.3878 14.3478C16.4863 14.4813 16.6189 14.643 16.7796 14.8395L17.5536 14.2063ZM17.9293 14.732C17.8454 14.5574 17.7094 14.3967 17.5536 14.2063L16.7796 14.8395C16.9711 15.0735 17.0088 15.1251 17.0282 15.1654L17.9293 14.732ZM17.8579 16.1637C18.123 15.7294 18.1499 15.1904 17.9293 14.732L17.0282 15.1654C17.1017 15.3183 17.0927 15.4979 17.0044 15.6427L17.8579 16.1637ZM17.4318 16.6493C17.6057 16.4754 17.757 16.329 17.8579 16.1637L17.0044 15.6427C16.981 15.6809 16.9384 15.7284 16.7246 15.9422L17.4318 16.6493ZM17.4317 16.6494L17.4318 16.6493L16.7247 15.9422L16.7246 15.9422L17.4317 16.6494ZM16.6498 17.4312L17.4317 16.6494L16.7246 15.9422L15.9427 16.7241L16.6498 17.4312ZM16.1639 17.8576C16.3293 17.7567 16.4758 17.6053 16.6498 17.4312L15.9427 16.7241C15.7288 16.9381 15.6813 16.9807 15.643 17.004L16.1639 17.8576ZM14.7325 17.929C15.1909 18.1494 15.7297 18.1226 16.1639 17.8576L15.643 17.004C15.4983 17.0923 15.3187 17.1013 15.1659 17.0278L14.7325 17.929ZM14.2066 17.5531C14.3971 17.709 14.5579 17.845 14.7325 17.929L15.1659 17.0278C15.1255 17.0084 15.0739 16.9707 14.8398 16.7791L14.2066 17.5531ZM14.2458 17.5821L14.2458 17.5821L14.8005 16.7501L14.8005 16.7501L14.2458 17.5821ZM13.5897 17.0871C13.5998 17.0907 13.6424 17.1094 13.754 17.1917C13.8627 17.2719 14.0018 17.3856 14.2065 17.5531L14.8398 16.7791C14.6432 16.6183 14.4814 16.4857 14.3479 16.3872C14.2173 16.2908 14.0767 16.1983 13.9208 16.1436L13.5897 17.0871ZM12.9734 17.3424C13.0838 17.1127 13.3492 17.0028 13.5897 17.0871L13.9208 16.1436C13.1995 15.8904 12.4031 16.2203 12.072 16.9094L12.9734 17.3424ZM12.8667 18.1083C12.893 17.845 12.911 17.6662 12.9311 17.5326C12.9518 17.3954 12.9688 17.352 12.9734 17.3424L12.072 16.9094C12.0005 17.0583 11.9665 17.2231 11.9423 17.3836C11.9176 17.5478 11.8969 17.756 11.8716 18.0088L12.8667 18.1083ZM12.8667 18.1083L12.8667 18.1083L11.8716 18.0088L11.8716 18.0088L12.8667 18.1083ZM12.7605 18.7464C12.8247 18.5634 12.8422 18.3534 12.8667 18.1083L11.8716 18.0088C11.8415 18.31 11.8317 18.3731 11.8168 18.4155L12.7605 18.7464ZM11.6981 19.7079C12.1923 19.5882 12.5922 19.2262 12.7605 18.7464L11.8168 18.4155C11.7608 18.5754 11.6274 18.6961 11.4627 18.736L11.6981 19.7079ZM11.0527 19.75C11.2989 19.75 11.5096 19.7535 11.6981 19.7079L11.4627 18.736C11.4191 18.7465 11.3553 18.75 11.0527 18.75V19.75ZM9.94721 19.75H11.0527V18.75H9.94721V19.75ZM9.30205 19.7079C9.49043 19.7535 9.70104 19.75 9.94721 19.75V18.75C9.64466 18.75 9.5809 18.7465 9.53734 18.736L9.30205 19.7079ZM8.23945 18.7462C8.40772 19.2262 8.80773 19.5882 9.30205 19.7079L9.53734 18.736C9.37257 18.6961 9.23923 18.5754 9.18314 18.4154L8.23945 18.7462ZM8.13335 18.1085C8.15785 18.3534 8.17533 18.5633 8.23945 18.7462L9.18314 18.4154C9.16831 18.3731 9.1585 18.31 9.12839 18.009L8.13335 18.1085ZM8.02662 17.3427C8.03125 17.3524 8.04822 17.3958 8.06888 17.5329C8.089 17.6665 8.10703 17.8452 8.13335 18.1085L9.12839 18.009C9.10312 17.7562 9.08245 17.548 9.05772 17.3839C9.03354 17.2234 8.99952 17.0586 8.92798 16.9097L8.02662 17.3427ZM7.41038 17.0875C7.65082 17.0031 7.91626 17.1131 8.02662 17.3427L8.92798 16.9097C8.59691 16.2206 7.80059 15.8908 7.07925 16.1439L7.41038 17.0875ZM6.79344 17.5535C6.9982 17.3859 7.13736 17.2723 7.24601 17.1921C7.35759 17.1097 7.40028 17.091 7.41038 17.0875L7.07925 16.1439C6.92337 16.1986 6.78273 16.2911 6.65215 16.3875C6.51864 16.4861 6.35679 16.6187 6.1602 16.7795L6.79344 17.5535ZM6.78916 17.5569L6.78917 17.5569L6.16448 16.7761L6.16447 16.7761L6.78916 17.5569ZM6.7768 17.5665L6.77682 17.5665L6.17682 16.7665L6.1768 16.7665L6.7768 17.5665ZM6.26743 17.9294C6.4421 17.8454 6.60289 17.7094 6.79342 17.5535L6.16018 16.7795C5.92603 16.9711 5.87447 17.0088 5.83408 17.0282L6.26743 17.9294ZM4.83609 17.858C5.27024 18.123 5.80907 18.1498 6.26743 17.9294L5.83408 17.0282C5.68129 17.1017 5.50168 17.0927 5.35696 17.0044L4.83609 17.858ZM4.35011 17.4316C4.52418 17.6057 4.67064 17.7571 4.83609 17.858L5.35696 17.0044C5.3187 16.9811 5.27115 16.9385 5.05721 16.7245L4.35011 17.4316ZM4.32737 17.4073L4.32737 17.4073L5.07995 16.7488L5.07995 16.7488L4.32737 17.4073ZM3.56834 16.6499L4.3501 17.4316L5.05721 16.7245L4.27545 15.9428L3.56834 16.6499ZM3.14193 16.1639C3.24289 16.3293 3.39427 16.4758 3.56834 16.6499L4.27545 15.9428C4.06152 15.7288 4.01891 15.6813 3.99556 15.643L3.14193 16.1639ZM3.07054 14.7325C2.85013 15.1909 2.87701 15.7297 3.14193 16.1639L3.99556 15.643C3.90725 15.4983 3.89829 15.3187 3.97176 15.1659L3.07054 14.7325ZM3.44648 14.2065C3.2906 14.3971 3.15453 14.5579 3.07054 14.7325L3.97176 15.1659C3.99119 15.1255 4.02886 15.0739 4.22044 14.8398L3.44648 14.2065ZM3.45718 14.1939L3.45717 14.1939L4.20975 14.8524L4.20975 14.8524L3.45718 14.1939ZM3.91246 13.5896C3.90892 13.5997 3.89023 13.6424 3.80787 13.754C3.72767 13.8626 3.61401 14.0018 3.44649 14.2065L4.22044 14.8398C4.38128 14.6432 4.51389 14.4814 4.61243 14.3479C4.70882 14.2173 4.80134 14.0766 4.85604 13.9208L3.91246 13.5896ZM3.6572 12.9734C3.8869 13.0837 3.99685 13.3492 3.91246 13.5896L4.85604 13.9208C5.1092 13.1994 4.77934 12.4031 4.09025 12.072L3.6572 12.9734ZM2.8915 12.8666C3.15473 12.893 3.3335 12.911 3.46703 12.9311C3.60416 12.9518 3.64756 12.9687 3.6572 12.9734L4.09025 12.072C3.94135 12.0005 3.7765 11.9664 3.61601 11.9423C3.45193 11.9176 3.24373 11.8969 2.991 11.8716L2.8915 12.8666ZM2.94124 12.8691H2.94125V11.8691H2.94124V12.8691ZM2.25377 12.7606C2.43666 12.8247 2.64655 12.8421 2.89148 12.8666L2.99099 11.8716C2.68997 11.8415 2.62688 11.8317 2.58459 11.8169L2.25377 12.7606ZM1.29211 11.6979C1.41177 12.1923 1.77379 12.5923 2.25377 12.7606L2.58459 11.8169C2.4246 11.7608 2.30392 11.6274 2.26404 11.4626L1.29211 11.6979ZM1.25 11.0528C1.25 11.299 1.24651 11.5096 1.29211 11.6979L2.26404 11.4626C2.25349 11.4191 2.25 11.3553 2.25 11.0528H1.25ZM1.25 9.9473L1.25 11.0528H2.25L2.25 9.9473H1.25ZM1.29214 9.30195C1.24651 9.49038 1.25 9.70105 1.25 9.9473H2.25C2.25 9.64466 2.25349 9.58088 2.26405 9.53731L1.29214 9.30195ZM2.25365 8.23949C1.77377 8.40776 1.41183 8.8077 1.29214 9.30195L2.26405 9.53731C2.30394 9.37256 2.42459 9.23924 2.58455 9.18315L2.25365 8.23949ZM2.89161 8.13334C2.64658 8.15785 2.4366 8.17533 2.25365 8.23949L2.58455 9.18315C2.62686 9.16832 2.68997 9.1585 2.99111 9.12838L2.89161 8.13334ZM3.65758 8.02657C3.64794 8.0312 3.60453 8.04818 3.46735 8.06885C3.33377 8.08898 3.15494 8.10701 2.89161 8.13334L2.99111 9.12838C3.24393 9.1031 3.45221 9.08242 3.61635 9.05769C3.77689 9.0335 3.94181 8.99946 4.09075 8.92788L3.65758 8.02657ZM3.91281 7.4104C3.99715 7.65082 3.88722 7.9162 3.65758 8.02657L4.09075 8.92788C4.77967 8.59679 5.10945 7.80063 4.85643 7.07937L3.91281 7.4104ZM3.44664 6.79321C3.61424 6.99805 3.72795 7.13727 3.80818 7.24597C3.89058 7.3576 3.90927 7.4003 3.91281 7.4104L4.85643 7.07937C4.80173 6.92343 4.70917 6.78274 4.61275 6.65211C4.51417 6.51855 4.38151 6.35664 4.2206 6.15997L3.44664 6.79321ZM3.0705 6.26692C3.15452 6.44169 3.29066 6.60257 3.44664 6.79321L4.2206 6.15997C4.0289 5.92567 3.9912 5.87408 3.97178 5.83367L3.0705 6.26692ZM3.14188 4.83587C2.87707 5.26996 2.8502 5.80864 3.0705 6.26692L3.97178 5.83367C3.89834 5.68091 3.9073 5.50135 3.99557 5.35665L3.14188 4.83587ZM3.56849 4.34965C3.39433 4.52381 3.24286 4.67033 3.14188 4.83587L3.99557 5.35665C4.01892 5.31837 4.06155 5.2708 4.2756 5.05676L3.56849 4.34965ZM4.35014 3.56799L3.56849 4.34965L4.2756 5.05676L5.05725 4.2751L4.35014 3.56799ZM4.35015 3.56799L4.35014 3.56799L5.05725 4.2751L5.05725 4.2751L4.35015 3.56799ZM4.83613 3.14157C4.67067 3.24253 4.52422 3.39392 4.35015 3.56799L5.05725 4.2751C5.27119 4.06116 5.31874 4.01855 5.357 3.9952L4.83613 3.14157ZM6.26747 3.07018C5.80911 2.84978 5.27028 2.87665 4.83613 3.14157L5.357 3.9952C5.50172 3.90689 5.68133 3.89794 5.83412 3.9714L6.26747 3.07018ZM6.79354 3.44618C6.60297 3.29026 6.44215 3.15417 6.26747 3.07018L5.83412 3.9714C5.87451 3.99083 5.92608 4.02851 6.1603 4.22014L6.79354 3.44618ZM6.79701 3.44906L6.79701 3.44905L6.15683 4.21727L6.15683 4.21728L6.79701 3.44906ZM7.41034 3.9121C7.40026 3.90856 7.35759 3.88987 7.24602 3.80752C7.13739 3.72733 6.99826 3.61368 6.79354 3.44619L6.1603 4.22015C6.35685 4.38096 6.51866 4.51354 6.65213 4.61206C6.78267 4.70842 6.92326 4.80093 7.07907 4.85564L7.41034 3.9121ZM8.02669 3.6568C7.91634 3.88656 7.65083 3.99654 7.41034 3.9121L7.07907 4.85564C7.80054 5.10894 8.59707 4.77901 8.92812 4.08974L8.02669 3.6568ZM8.13337 2.8914C8.10705 3.15453 8.08904 3.33322 8.06893 3.4667C8.04828 3.60378 8.03132 3.64717 8.02669 3.6568L8.92812 4.08974C8.99961 3.94089 9.0336 3.77609 9.05777 3.61567C9.08248 3.45165 9.10314 3.24353 9.1284 2.9909L8.13337 2.8914ZM8.13089 2.94114V2.94115H9.13089V2.94114H8.13089ZM8.1335 2.89011L8.13349 2.89013L9.12828 2.99216L9.12828 2.99214L8.1335 2.89011ZM8.2394 2.2539C8.17533 2.43673 8.15785 2.64654 8.13337 2.89138L9.12841 2.99088C9.1585 2.68998 9.16831 2.62691 9.18313 2.58463L8.2394 2.2539ZM9.3022 1.29208C8.80776 1.41172 8.40765 1.77381 8.2394 2.2539L9.18313 2.58463C9.23921 2.4246 9.37258 2.30391 9.53739 2.26403L9.3022 1.29208ZM9.94708 1.25C9.70102 1.25 9.4905 1.24651 9.3022 1.29208L9.53739 2.26403C9.58094 2.25349 9.64467 2.25 9.94708 2.25V1.25ZM11.0528 1.25H9.94708V2.25H11.0528V1.25ZM11.6979 1.29211C11.5096 1.24651 11.299 1.25 11.0528 1.25V2.25C11.3553 2.25 11.4191 2.25349 11.4627 2.26404L11.6979 1.29211ZM12.7606 2.25377C12.5923 1.77379 12.1923 1.41177 11.6979 1.29211L11.4627 2.26404C11.6274 2.30392 11.7608 2.4246 11.8169 2.58459L12.7606 2.25377ZM13.5 10.5C13.5 12.1569 12.1569 13.5 10.5 13.5V14.5C12.7091 14.5 14.5 12.7091 14.5 10.5H13.5ZM10.5 7.5C12.1569 7.5 13.5 8.84315 13.5 10.5H14.5C14.5 8.29086 12.7091 6.5 10.5 6.5V7.5ZM7.5 10.5C7.5 8.84315 8.84315 7.5 10.5 7.5V6.5C8.29086 6.5 6.5 8.29086 6.5 10.5H7.5ZM10.5 13.5C8.84315 13.5 7.5 12.1569 7.5 10.5H6.5C6.5 12.7091 8.29086 14.5 10.5 14.5V13.5Z"
							fill="#222222"
						/>
					</svg>
					Настройки
				</div>
				<div className={style.exit}>
					<svg
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1.75 10.5L1.35957 10.1877L1.10969 10.5L1.35957 10.8123L1.75 10.5ZM9.625 11C9.90114 11 10.125 10.7761 10.125 10.5C10.125 10.2239 9.90114 10 9.625 10V11ZM4.85957 5.81265L1.35957 10.1877L2.14043 10.8123L5.64043 6.43735L4.85957 5.81265ZM1.35957 10.8123L4.85957 15.1873L5.64043 14.5627L2.14043 10.1877L1.35957 10.8123ZM1.75 11H9.625V10H1.75V11Z"
							fill="#222222"
						/>
						<path
							d="M8.75 7.11544V6.88851C8.75 5.27017 8.75 4.461 9.22396 3.9015C9.69792 3.34201 10.4961 3.20899 12.0924 2.94293L12.2636 2.9144C15.5067 2.37388 17.1282 2.10363 18.1891 3.00232C19.25 3.90102 19.25 5.54493 19.25 8.83276V12.1672C19.25 15.4551 19.25 17.099 18.1891 17.9977C17.1282 18.8964 15.5067 18.6261 12.2636 18.0856L12.0924 18.0571C10.4961 17.791 9.69792 17.658 9.22396 17.0985C8.75 16.539 8.75 15.7298 8.75 14.1115V14.0577"
							stroke="#222222"
						/>
					</svg>
					Выйти
				</div>
			</div>
		</div>
	);
};

export default Profile;
