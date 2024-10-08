'use client';

import React from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {signIn, useSession} from 'next-auth/react';
import Image from "next/image";
import styles from './login.module.css';
// import {useCategoryStore} from "../../store/category";

// export const dynamic = 'force-static';

export default function Login() {
    const {data: session} = useSession();
    const router = useRouter()
    // const activeId = useCategoryStore(state => state.activeId);

    if (session) {
        // @ts-ignore
        const {name, image} = !!session ? session : {name: '', image: ''};

        return <div className={styles.session}>
            <div>Вы вошли успешно.</div>
            Добрый день, {name}!
            <div>
                <Image
                    width={40}
                    height={40}
                    src={image}
                    alt={name}/>
            </div>
            <div>
                <Link href={'/dashboard'} scroll={false}>Перейти в dashboard</Link>
            </div>
        </div>
    }
    const cancelHandler = (e: any) => {
        console.log(e)
        e.preventDefault();
        e.stopPropagation();
        router.push('/');
    }
    return (
        <div className={styles.loginWrap} onClick={cancelHandler}>
            <div className={styles.login}>
                <h2 className={styles.loginH1}>Вход</h2>
                <form>
                    <div className={styles.mb4}>
                        <label className={styles.formLabel} htmlFor="email">Email или Имя пользователя</label>
                        <input
                            className={styles.formInput}
                            id="email"
                            type="email"
                            placeholder="email or name"
                        />
                    </div>
                    <div className={styles.mb4}>
                        <label className={styles.formLabel} htmlFor="password">Пароль</label>
                        <input
                            className={styles.formInput}
                            id="password"
                            type="password"
                            placeholder="password"
                        />
                    </div>
                    <div className={styles.btnGroup}>
                        <div className={styles.githubBtn}>
                            <button className={styles.btnSubmit} type="button">Войти</button>
                        </div>
                        <div className={styles.forgot}>Войти через сети</div>
                        <div className={styles.githubBtn}>
                            <button onClick={() => signIn('github')} className={styles.btnSubmit}
                                    type="button">github
                            </button>
                            <button onClick={() => signIn('mailru')} className={styles.btnSubmit}
                                    type="button">mailru
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

// <button className={styles.btnSubmit} onClick={cancelHandler} type="button">Отмена</button>

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