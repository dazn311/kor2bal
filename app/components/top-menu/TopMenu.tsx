import {FC} from 'react';
import Link from "next/link";
import './TopMenu.styles.css';

export const TopMenu:FC = ()=> {
    return <div className="top-menu">
        <div className="menu-top-menyu-container">
            <ul id="menu-top-menyu" className="menu">
                <li className="menu-item">
                    <Link className="link" href="/deliveryPayment">Доставка и оплата</Link>
                </li>
                <li className="menu-item">
                    <Link className="link" href="/otzivi">Отзывы</Link>
                </li>
                <li className="menu-item">
                    <Link className="link" href="/contacts">Контакты</Link>
                </li>
            </ul>
        </div>
    </div>
}

export default TopMenu;