'use client';

import { useAppDispatch, useAppSelector } from '@/features/hooks/redux';
import stylesCard from './Card.module.sass';
import { ArrSlice } from '@/app/GlobalRedux/reducer/ArrSlice';
import Link from 'next/link';

export const CardFiles = () => {
	const { ArrCards, currentInput } = useAppSelector((state) => state.ArrSlice);
	const { AddInput, SetName, SetFolderId } = ArrSlice.actions;
	const dispatch = useAppDispatch();

	//-------------------------------------
	// модальное окно

	const {} = useAppSelector((state) => state.ArrSlice);
	const {} = ArrSlice.actions;

	//-------------------------------------

	return ArrCards.map((Prpops: any) => {
		return (
			<Link
				key={Prpops.name}
				href={`/Folder`}
				style={{ textDecoration: 'none' }}
				onClick={() => dispatch(SetFolderId(Prpops.name))}
			>
				<div
					className={stylesCard.CardCont}
					onClick={() => {
						dispatch(SetName(1));
						currentInput !== ''
							? dispatch(AddInput(currentInput))
							: dispatch(AddInput(''));
					}}
				>
					<div className={stylesCard.upCont}>
						<div className={stylesCard.svgBlock}>
							<svg
								width="18"
								height="14"
								viewBox="0 0 18 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.3154 1.79424H9.08882L7.65137 0.0883548C7.60301 0.0303156 7.53055 -0.00223361 7.45499 0.000119331H1.62466C0.734496 0.00658992 0.0163574 0.728943 0.0163574 1.61777V12.1099C0.0174375 13.0018 0.741271 13.7245 1.63448 13.7256H16.3154C17.2086 13.7245 17.9324 13.0018 17.9335 12.1099V3.40992C17.9324 2.51806 17.2086 1.79532 16.3154 1.79424Z"
									fill="#0061FF"
								/>
							</svg>
						</div>
						<div className={stylesCard.Contdoc}>
							<div
								key={Prpops.id}
								className={stylesCard.Maintxt}
								onClick={(e) => e.stopPropagation()}
							>
								{ArrCards[ArrCards.length - 1].name === '' &&
								ArrCards[ArrCards.length - 1].id === Prpops.id ? (
									<input
										type="text"
										className={stylesCard.Maintxt}
										onChange={(e) => dispatch(AddInput(e.target.value))}
										onKeyDown={(e) =>
											e.key === 'Enter' && dispatch(SetName(''))
										}
										onClick={(e) => e.stopPropagation()}
										placeholder="Название"
										maxLength={30}
									/>
								) : (
									Prpops.name
								)}
							</div>

							<div className={stylesCard.date} key={Prpops.date}>
								{Prpops.date}
							</div>
						</div>
						<div className={stylesCard.contSvg}>
							<svg
								width="4"
								height="20"
								viewBox="0 0 4 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="2" cy="2" r="2" fill="#808688" />
								<circle cx="2" cy="10" r="2" fill="#808688" />
								<ellipse cx="2" cy="17.9998" rx="2" ry="2" fill="#808688" />
							</svg>
						</div>
					</div>
					<div className={stylesCard.underCont}>
						<div className={stylesCard.shareCont}>
							<span>Поделиться</span>
							<div>
								<img
									src="./Rectangle 2009.png"
									alt=""
									className={stylesCard.img}
								/>
								<img
									src="./Rectangle 2010.png"
									alt=""
									className={stylesCard.img}
								/>
								<img
									src="./Rectangle 2011.png"
									alt=""
									className={stylesCard.img}
								/>
								<img
									src="./Rectangle 2012.png"
									alt=""
									className={stylesCard.img}
								/>
								<div>+80</div>
							</div>
						</div>
						<div className={stylesCard.FilesInside}>
							<span>Файлов внутри</span>
							<div key={Prpops.fileNums}>{Prpops.fileNums}</div>
						</div>
					</div>
				</div>
			</Link>
		);
	});
};
