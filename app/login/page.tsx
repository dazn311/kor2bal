import styles from './login.module.css';
import Link from "next/link";
export const dynamic = 'force-static';

export default function Login() {
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
                    </div>
                </form>
            </div>
        </div>
    )
}
