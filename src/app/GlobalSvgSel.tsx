interface Props {
	id: string;
}

export const GlobalSvgSelector = ({ id }: Props) => {
	switch (id) {
		case 'image':
			return (
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_3_770)">
						<path
							d="M8.34144 9.40201C8.13249 9.19293 7.88439 9.02707 7.61131 8.9139C7.33824 8.80074 7.04554 8.74249 6.74994 8.74249C6.45435 8.74249 6.16165 8.80074 5.88857 8.9139C5.6155 9.02707 5.36739 9.19293 5.15844 9.40201L0.0284424 14.532C0.0977878 15.4726 0.519623 16.3523 1.2096 16.9953C1.89957 17.6383 2.80683 17.9971 3.74994 18H14.2499C14.9847 17.9999 15.7031 17.7825 16.3147 17.3753L8.34144 9.40201Z"
							fill="#F2994A"
						/>
						<path
							d="M13.5 6C14.3284 6 15 5.32843 15 4.5C15 3.67157 14.3284 3 13.5 3C12.6716 3 12 3.67157 12 4.5C12 5.32843 12.6716 6 13.5 6Z"
							fill="#F2994A"
						/>
						<path
							d="M14.25 0H3.75C2.7558 0.00119089 1.80267 0.396661 1.09966 1.09966C0.396661 1.80267 0.00119089 2.7558 0 3.75L0 12.4395L4.098 8.3415C4.44623 7.99318 4.85967 7.71686 5.31471 7.52835C5.76974 7.33983 6.25746 7.2428 6.75 7.2428C7.24254 7.2428 7.73026 7.33983 8.18529 7.52835C8.64033 7.71686 9.05377 7.99318 9.402 8.3415L17.3752 16.3148C17.7825 15.7031 17.9999 14.9848 18 14.25V3.75C17.9988 2.7558 17.6033 1.80267 16.9003 1.09966C16.1973 0.396661 15.2442 0.00119089 14.25 0V0ZM13.5 7.5C12.9067 7.5 12.3266 7.32405 11.8333 6.99441C11.3399 6.66476 10.9554 6.19623 10.7284 5.64805C10.5013 5.09987 10.4419 4.49667 10.5576 3.91473C10.6734 3.33279 10.9591 2.79824 11.3787 2.37868C11.7982 1.95912 12.3328 1.6734 12.9147 1.55764C13.4967 1.44189 14.0999 1.5013 14.6481 1.72836C15.1962 1.95542 15.6648 2.33994 15.9944 2.83329C16.3241 3.32664 16.5 3.90666 16.5 4.5C16.5 5.29565 16.1839 6.05871 15.6213 6.62132C15.0587 7.18393 14.2956 7.5 13.5 7.5Z"
							fill="#F2994A"
						/>
					</g>
					<defs>
						<clipPath id="clip0_3_770">
							<rect width="18" height="18" fill="white" />
						</clipPath>
					</defs>
				</svg>
			);
		case 'video':
			return (
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_3_774)">
						<path
							d="M10.1816 3.71228H1.96937C0.886214 3.71228 0 4.59849 0 5.68165V12.3184C0 13.4016 0.886214 14.2878 1.96937 14.2878H10.1816C11.2648 14.2878 12.151 13.4016 12.151 12.3184V5.68165C12.151 4.5788 11.2648 3.71228 10.1816 3.71228Z"
							fill="#BB6BD9"
						/>
						<path
							d="M16.5426 4.79539C16.4245 4.81509 16.3063 4.87417 16.2078 4.93325L13.1356 6.70568V11.2746L16.2275 13.047C16.7986 13.3818 17.5076 13.1849 17.8424 12.6138C17.9409 12.4365 18 12.2396 18 12.023V5.93762C18 5.20896 17.3107 4.61815 16.5426 4.79539Z"
							fill="#BB6BD9"
						/>
					</g>
					<defs>
						<clipPath id="clip0_3_774">
							<rect width="18" height="18" fill="white" />
						</clipPath>
					</defs>
				</svg>
			);
		case 'application':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
				>
					<path
						d="M5.25 9.9611C5.25 9.35998 5.25 9.05941 5.33582 8.77598C5.42163 8.49255 5.58835 8.24247 5.9218 7.7423L6.39587 7.0312C6.97715 6.15927 7.2678 5.7233 7.70998 5.48665C8.15217 5.25 8.67614 5.25 9.72407 5.25H18.2759C19.3239 5.25 19.8478 5.25 20.29 5.48665C20.7322 5.7233 21.0228 6.15927 21.6041 7.0312L22.0782 7.7423C22.4116 8.24247 22.5784 8.49255 22.6642 8.77598C22.75 9.05941 22.75 9.35998 22.75 9.9611V18.75C22.75 20.6356 22.75 21.5784 22.1642 22.1642C21.5784 22.75 20.6356 22.75 18.75 22.75H9.25C7.36438 22.75 6.42157 22.75 5.83579 22.1642C5.25 21.5784 5.25 20.6356 5.25 18.75V9.9611Z"
						stroke="#7537F9"
						stroke-width="2"
					/>
					<path
						d="M5.25 11.0833H22.75"
						stroke="#7537F9"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path
						d="M11.0834 11.2333C11.0834 11.1505 11.1505 11.0833 11.2334 11.0833H16.7667C16.8496 11.0833 16.9167 11.1505 16.9167 11.2333V16.1219C16.9167 16.4716 16.5351 16.6877 16.2352 16.5077L14.1287 15.2438C14.0495 15.1963 13.9506 15.1963 13.8714 15.2438L11.7649 16.5077C11.465 16.6877 11.0834 16.4716 11.0834 16.1219V11.2333Z"
						stroke="#7537F9"
						stroke-width="2"
					/>
				</svg>
			);
		case 'audio':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M10 7V16.4C9.6 16.2 9.1 16 8.5 16C7.1 16 6 16.9 6 18C6 19.1 7.1 20 8.5 20C9.9 20 11 19.1 11 18V10.7L18 8.4V13.5C17.6 13.2 17.1 13 16.5 13C15.1 13 14 13.9 14 15C14 16.1 15.1 17 16.5 17C17.9 17 19 16.1 19 15V4L10 7Z"
						fill="#C43333"
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
				>
					<path
						d="M5.25 9.9611C5.25 9.35998 5.25 9.05941 5.33582 8.77598C5.42163 8.49255 5.58835 8.24247 5.9218 7.7423L6.39587 7.0312C6.97715 6.15927 7.2678 5.7233 7.70998 5.48665C8.15217 5.25 8.67614 5.25 9.72407 5.25H18.2759C19.3239 5.25 19.8478 5.25 20.29 5.48665C20.7322 5.7233 21.0228 6.15927 21.6041 7.0312L22.0782 7.7423C22.4116 8.24247 22.5784 8.49255 22.6642 8.77598C22.75 9.05941 22.75 9.35998 22.75 9.9611V18.75C22.75 20.6356 22.75 21.5784 22.1642 22.1642C21.5784 22.75 20.6356 22.75 18.75 22.75H9.25C7.36438 22.75 6.42157 22.75 5.83579 22.1642C5.25 21.5784 5.25 20.6356 5.25 18.75V9.9611Z"
						stroke="#7537F9"
						stroke-width="2"
					/>
					<path
						d="M5.25 11.0833H22.75"
						stroke="#7537F9"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path
						d="M11.0834 11.2333C11.0834 11.1505 11.1505 11.0833 11.2334 11.0833H16.7667C16.8496 11.0833 16.9167 11.1505 16.9167 11.2333V16.1219C16.9167 16.4716 16.5351 16.6877 16.2352 16.5077L14.1287 15.2438C14.0495 15.1963 13.9506 15.1963 13.8714 15.2438L11.7649 16.5077C11.465 16.6877 11.0834 16.4716 11.0834 16.1219V11.2333Z"
						stroke="#7537F9"
						stroke-width="2"
					/>
				</svg>
			);
	}
};