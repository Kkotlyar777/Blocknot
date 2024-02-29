'use client';

import style from './auth.module.sass';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Login from '@/widgets/googleAuth/Login';

export function Register() {
	interface Iform {
		email: string;
		name: string;
		password: string;
	}

	const { register, handleSubmit, reset } = useForm<Iform>();

	const onSubmit: SubmitHandler<Iform> = (data) => {
		setisLoading(true);
		fetch('http://localhost:4000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				if (!data) return;
				setisSuccess(true);
				reset();
			})
			.finally(() => {
				setisLoading(false);
			});
	};

	const [isSuccess, setisSuccess] = useState(false);
	const [isLoading, setisLoading] = useState(false);
	const [isClicked, setisClicked] = useState(false);

	return (
		<div className={style.backDiv}>
			<div className={style.mainDiv}>
				<form onSubmit={handleSubmit(onSubmit)}>
					{isSuccess ? (
						<div className={style.isRegister}>
							<span>
								Вы успешно зарегистрированы! <br />
								Для входа перейдите по{' '}
								<Link href={'/'} style={{ color: 'white' }}>
									ссылке
								</Link>
								.
							</span>
						</div>
					) : (
						<>
							<div className={style.titleDiv}>
								<span className={style.titleReg}>РЕГИСТРАЦИЯ</span>
								<span className={style.title}>
									<Link
										href={'/'}
										style={{ textDecoration: 'none', color: 'black' }}
									>
										ВХОД
									</Link>
								</span>
							</div>
							<div className={style.mainForm}>
								<div className={style.loginInput}>
									<input
										type="email"
										placeholder="Введите e-mail:"
										{...register('email')}
										required
										style={{
											width: '258px',
											paddingLeft: '15px',
											boxSizing: 'border-box',
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
									>
										<img role="img" src="/email.svg" />
									</div>
								</div>
								<div className={style.loginInput}>
									<input
										type="name"
										placeholder="Введите логин:"
										required
										{...register('name')}
										style={{
											paddingLeft: '15px',
											boxSizing: 'border-box',
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
											paddingLeft: '15px',
											boxSizing: 'border-box',
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
								<button disabled={isLoading} className={style.logInBtn}>
									{isLoading ? 'Загрузка...' : 'Регистрация'}
								</button>
								<span className={style.bottomSpan}></span>
								{/* <button className={style.logWithGoggle}>
									<img src="/GoogleICO.png" />
									<span>
										Продолжить с <b>Google</b>
									</span>
								</button> */}
								<Login />
							</div>
						</>
					)}
				</form>
			</div>
		</div>
	);
}
