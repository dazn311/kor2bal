import Link from "next/link";
import './Orders.styles.css';

export default function Orders() {
    return <div className="container">
        <h3 style={{textAlign: 'center'}}>Заказы</h3>
        <div className="widget">
            Чтобы посмотреть заказы нужно авторизоваться.
            <Link href={'/login'}>Войти</Link>
        </div>
    </div>
}