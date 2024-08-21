'use client';

import React, {FC} from "react";
import Link from "next/link";
import {signIn, useSession} from 'next-auth/react';
import Image from "next/image";
import styles from './login.module.css';

export const dynamic = 'force-static';

export const Login:FC = () => {
    const {data: session} = useSession();

    if (session) {
        return <div className={styles.session}>
            <div>Вы вошли успешно.</div>
            Добрый день, {session.user.name}!
            <div>
                <Image
                    width={40}
                    height={40}
                    src={session.user?.image}
                    alt={session.user.name}/>
            </div>

        </div>
    }
    return (
        <div className={styles.loginWrap}>
            <div className={styles.login}>
                <h2 className={styles.loginH1}>Вход</h2>
                <form>
                    <div className={styles.mb4}>
                        <label className={styles.formLabel} htmlFor="email">Имя пользователя или Email</label>
                        <div
                            contentEditable={"true"}
                            className={styles.formInput}
                            id="email"
                            data-type="email"
                            data-placeholder="Enter your email"
                        />
                    </div>
                    <div className={styles.mb4}>
                        <label className={styles.formLabel} htmlFor="password">Пароль</label>
                        <div
                            contentEditable={"true"}
                            className={styles.formInput}
                            id="password"
                            data-type="password"
                            data-placeholder="Enter your password"
                        />
                    </div>
                    <div className={styles.btnGroup}>
                        <button className={styles.btnSubmit} type="button">Войти</button>
                        <Link className={styles.forgot} href="#">Забыли свой пароль?</Link>
                        <button onClick={()=>signIn('github')} className={styles.btnSubmit} type="button">github</button>
                        <button onClick={()=>signIn('mailru')} className={styles.btnSubmit} type="button">mailru</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;

//session : {
//     "user": {
//         "name": "Alexander",
//         "email": "alex2505@bk.ru",
//         "image": "https://avatars.githubusercontent.com/u/57184332?v=4"
//     },
//     "expires": "2024-09-20T05:45:08.033Z"
// }
//session : {
//     "user": {
//         "name": "Sanya Monds",
//         "email": "alex2505@bk.ru",
//         "image": "https://filin.mail.ru/pic?d=8qSsnxEP80bXfZh2tCQIcTgjnksj3hplCbeuTKzEh4XC3LA8cUbqkrimw_I~&width=180&height=180"
//     },
//     "expires": "2024-09-20T07:39:54.703Z"
// }