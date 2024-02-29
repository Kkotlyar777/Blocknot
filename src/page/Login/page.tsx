'use client';

import style from './login.module.sass';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import GoogleAuth from '@/widgets/googleAuth/Login';

export default function Login() {
	interface IformLogin {
		name: string;
		password: string;
	}

	const { register, handleSubmit, reset } = useForm<IformLogin>();

	const [isError, setisError] = useState(false);
	const [isdata, setisdata] = useState(false);
	const [isClicked, setisClicked] = useState(false);

	const onSubmit: SubmitHandler<IformLogin> = (data) => {
		fetch('http://localhost:4000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				alert(data);
				console.log(data);
				reset();
				setisdata(data.email);
			});
	};

	return (
		<div className={style.backDiv}>
			<div className={style.mainDiv}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{isError ? (
						<></>
					) : (
						<>
							<div className={style.titleDiv}>
								<span className={style.title}>
									<Link
										href={'/Authorization'}
										style={{ textDecoration: 'none', color: 'black' }}
									>
										РЕГИСТРАЦИЯ
									</Link>
								</span>
								<span className={style.titleLog}>ВХОД</span>
							</div>
							<div className={style.mainForm}>
								<div className={style.loginInput}>
									<input
										type="name"
										placeholder="Введите логин:"
										required
										{...register('name')}
										style={{ boxSizing: 'border-box', paddingLeft: '15px' }}
									/>
									<div
										style={{
											width: '16px',
											height: '16px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<img role="img" src="/login.svg" />
									</div>
								</div>
								<div className={style.loginInput}>
									<input
										type={isClicked ? 'text' : 'password'}
										placeholder="Введите пароль:"
										required
										{...register('password')}
										style={{
											width: '258px',
											boxSizing: 'border-box',
											paddingLeft: '15px',
										}}
									/>
									<div
										style={{
											width: '16px',
											height: '16px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
										onClick={() => {
											if (isClicked == true) {
												setisClicked(false);
											} else {
												setisClicked(true);
											}
										}}
									>
										<img
											role="img"
											src={isClicked ? '/pass.svg' : '/pass(text).svg'}
										/>
									</div>
								</div>
							</div>
							<div className={style.botForm}>
								<button className={style.logInBtn}>Войти</button>
								<span className={style.bottomSpan}></span>
								{/* <button className={style.logWithGoggle}>
									<img src="/GoogleICO.png" />
									<span>
										Продолжить с <b>Google</b>
									</span>
								</button> */}
								<GoogleAuth />
							</div>
						</>
					)}
				</form>
			</div>
		</div>
	);
}
