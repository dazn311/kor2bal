'use client';

import {useSession} from "next-auth/react";
import Link from "next/link";
import userIcon from "../../assets/icons/user.svg";
import PopupCart from "../popup_cart/PopupCart";
import './MobileNav.styles.css';
// import Basket from "@/app/(root)/basket/page";
// import Orders from "@/app/(root)/orders/page";

export default function MobileNav() {
    const {data: session} = useSession();
    const userImgUrl = !!session?.user ? session.user.image : userIcon;
    return (
        <ul className="container header__list">
            <li className="header__item">
                <Link href="/" scroll={false} title={'Каталог'} className={'header__link'}>
                    <div className="header__icon" style={{width: '1.875rem', height: '1.875rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" id="catalog_active">
                            <path d="M25 15a10 10 0 01-20 0h20z" stroke="#000" strokeWidth="1.625"/>
                            <path d="M20 5l-6 6.5M25 5l-6 6.5" stroke="#ED1B34" strokeWidth="1.625"/>
                        </svg>
                    </div>
                    <div className="header__text">Каталог</div>
                </Link>
            </li>
            <li className="header__item">
            <Link href="/" scroll={false} title={'Поиск'} className={'header__link'}>
                    <div className="header__icon" style={{width: '1.475rem', height: '1.475rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" id="search">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M0 9.646C0 4.374 4.248 0 9.613 0c5.254 0 9.502 4.374 9.502 9.646a9.519 9.519 0 01-2.348 6.281l4.807 4.263c.447.448.559 1.01.112 1.458-.336.449-1.006.449-1.454.112l-4.806-4.262a.85.85 0 01-.173-.174 9.443 9.443 0 01-5.64 1.856C4.36 19.18 0 14.918 0 9.646zm1.788 0c0 4.262 3.466 7.852 7.825 7.852 4.248 0 7.713-3.59 7.825-7.852 0-4.374-3.465-7.851-7.825-7.851S1.79 5.272 1.79 9.646z"
                                  fill="#000"/>
                        </svg>
                    </div>
                    <div className="header__text">Поиск</div>
                </Link>
            </li>
            <li className="header__item">
                <Link href="/" scroll={false} title={'Избранное'} className={'header__link'}>
                    <div className="header__icon" style={{width: '1.875rem', height: '1.875rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 76" id="favorite">
                            <g clipPath="url(#hclip0_228_20)">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M43.135 67.75C72.34 54.253 85.698 28.958 73.481 12.765c-8.689-11.514-25.031-9.256-31.48.45-6.448-9.706-22.792-11.965-31.482-.45-12.217 16.193 1.143 41.488 30.347 54.985.72.333 1.55.333 2.27 0zm1.582-45.409c0-11.39 16.566-16.71 24.436-6.278 9.51 12.604-1.488 33.87-27.152 46.194-25.665-12.324-36.664-33.59-27.155-46.194 7.872-10.432 24.44-5.113 24.44 6.278h5.43z"
                                      fill="#000"/>
                            </g>
                            <defs>
                                <clipPath id="hclip0_228_20">
                                    <path fill="#fff" d="M0 0h84v76H0z"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="header__text">Избранное</div>
                </Link>
            </li>
            <li className="header__item">
            <Link href="/basket" scroll={false} title={'Корзина'} className={'header__link'}>
                    <div className="header__icon" style={{width: '1.875rem', height: '1.875rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="cart_active">
                            <path d="M16.236 6.259C16.236 3.907 14.25 2 11.8 2S7.364 3.907 7.364 6.259" stroke="#ED1B34"
                                  strokeWidth="1.711"/>
                            <path
                                d="M3.366 8.982l16.872.085.484 9.08a2.811 2.811 0 01-2.807 2.961H5.685a2.811 2.811 0 01-2.807-2.96l.488-9.166z"
                                stroke="#000" strokeWidth="1.711"/>
                            <path d="M8.17 13.797h7.26" stroke="#ED1B34" strokeWidth="1.7"/>
                        </svg>
                    </div>
                    <div className="header__text">Корзина</div>
                </Link>
            </li>
            <li className="header__item">
            <Link href="/orders" scroll={false} title={'Заказы'} className={'header__link'}>
                    <div className="header__icon" style={{width: '1.875rem', height: '1.875rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="order_active">
                            <path d="M12.495 7.421v6.316h4.737" stroke="#ED1B34" strokeWidth="1.867"/>
                            <path d="M7.673 11.216L4.045 14.26 1 10.63" stroke="#000" strokeWidth="1.8"/>
                            <path d="M6.95 18.547A9 9 0 104.126 12v1.745" stroke="#000" strokeWidth="1.8"/>
                        </svg>
                    </div>
                    <div className="header__text">Заказы</div>
                </Link>
            </li>
            <PopupCart/>
        </ul>)
}