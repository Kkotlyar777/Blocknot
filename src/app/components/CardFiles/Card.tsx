'use client'

import stylesCard from './Card.module.sass';
import { useState } from 'react';
import { useRef } from 'react';


export const CardComp = () => {
	const ArrCard: any = [
		{ name: 'Документы', date: 'Nov 15, 2021, 09:45 AM', fileNums: 1.322, id: 'qweqsadawa' },
		{ name: 'Фото', date: ' Jan 7, 2022, 03:30 PM', fileNums: 8.442, id: 'jhfggfhv' },
		{ name: 'Новый год22', date: 'Mar 20, 2022, 10:15 AM', fileNums: 1.0, id: 'awdawdsax' },
		{ name: 'Старый Год 33', date: 'Apr 5, 2022, 01:00 PM', fileNums: 1.235, id: 'asvxs' },
		{ name: 'Откаты на форум', date: 'Feb 12, 2022, 05:55 PM', fileNums: 7.381, id: 'asdafww'},
		{ name: 'Очень секретно', date: 'May 25, 2022, 11:20 AM', fileNums: 3.515, id: 'asdwawd' },
		{ name: 'Git', date: 'Jul 8, 2022, 08:10 AM', fileNums: 7.962, id: 'ddfhhfccdhgf' },
	];

	const [cards, setCards] = useState(ArrCard);

  const addCard = () => {
    setCards([...ArrCard, {
      name: '123',
      date: 'Mar 20, 2022, 10:15 AM',
      fileNums: 1.235,
      id: new Date(),
    }])
  }
  console.log(cards)


	return ArrCard.map((Prpops: any) => {
		return (
			<div className={stylesCard.CardCont} onClick={() => {addCard()}}>
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
						<div className={stylesCard.txt}>{Prpops.name}</div>
						<div className={stylesCard.date}>{Prpops.date}</div>
					</div>
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
						<div>{Prpops.fileNums}</div>
					</div>
				</div>
			</div>
		);
	});
};

