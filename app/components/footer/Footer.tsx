import {FC} from 'react';
import Image from "next/image";
import iconOrderStatus from '../../assets/icons/order-status.svg';
import iconEmail from '../../assets/icons/email.svg';
import iconTelegram from '../../assets/icons/telegram.svg';
import iconViber from '../../assets/icons/viber.svg';
import iconWhatsapp from '../../assets/icons/whatsapp.svg';
import iconVk from '../../assets/icons/vk.svg';
import iconInstagram from '../../assets/icons/instagram.svg';
import Link from "next/link";
import './footer.styles.css';

export const Footer:FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className={'mobile-view row'}>
                    <div className={'col col-12'}>
                        <button className={'btn btn-block btn-transparent-yellow js-status-order'}>
                            <Image
                                src={iconOrderStatus} alt={'order-status'} height={12} width={12}>
                            </Image>
                        </button>
                    </div>
                </div>
                <div className={'mobile-view row'}>
                    <div className={'col col-12'}>
                        <div className={'menu-top-menyu-container'}>
                            <div id={'menu-top-menyu-1'} className="menu">
                                <li className={'menu-item menu-item-type-post_type menu-item-object-page menu-item-32947'}>
                                    <Link href="/deliveryPayment">Доставка и оплата</Link>
                                </li>
                                <li className={'menu-item menu-item-type-post_type menu-item-object-page menu-item-32947'}>
                                    <Link href="/otzivi">Отзывы</Link>
                                </li>
                                <li className={'menu-item menu-item-type-post_type menu-item-object-page menu-item-32947'}>
                                    <Link href="/contacts">Контакты</Link>
                                </li>
                            </div>

                        </div>

                    </div>
                </div>
                <div className={'desktop-view row'}>
                    <div className="col col-3">
                        <div className="menu-title">Информация</div>
                        <div className="menu-menyu-podval-1-container">
                            <ul id="menu-menyu-podval-1" className="menu">
                                <li id="menu-item-32907"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32907"><a
                                    href="/otzivi">Отзывы</a></li>
                                <li id="menu-item-32906"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32906"><a
                                    href="/contacts">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-3">
                        <div className="menu-title">Помощь</div>
                        <div className="menu-menyu-podval-2-container">
                            <ul id="menu-menyu-podval-2" className="menu">
                                <li id="menu-item-32908"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32908">
                                    <a href="/deliveryPayment">Доставка и оплата</a></li>
                                <li id="menu-item-32909"
                                    className="js-status-order menu-item menu-item-type-custom menu-item-object-custom menu-item-32909">
                                    <a href="#">Cтатус заказа</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col col-3">
                        <div className="menu-title">Популярные категории</div>
                        <div className="menu-populyarnye-kategorii-container">
                            <ul id="menu-populyarnye-kategorii" className="menu">
                                <li id="menu-item-2587"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2587">
                                    <Link href="/catalog/1">Лонгсливы
                                        и футболки</Link></li>
                                <li id="menu-item-2588"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2588">
                                    <Link href="/catalog/3">Наколенники</Link></li>
                                <li id="menu-item-2590"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2590">
                                    <Link href="/catalog/2">Штаны</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-3">
                        <div className="social-buttons">
                            <Link href={'malto:info@kor2basket.ru'} title={'Напиши на почту: info@kor2basket.ru'}>
                                <Image src={iconEmail} alt={'iconEmail'}/>
                            </Link>
                            <Link href={'https://tmtr.me/kor2basket'} title={'Напиши нам в Telegram: @kor2basket'}>
                                <Image src={iconTelegram} alt={'kor2basket'}/>
                            </Link>
                            <Link href={'viber://chat?number=+792230207555/'} title={'Напиши нам в Viber: +79197100555'}>
                                <Image src={iconViber} alt={'kor2basket'}/>
                            </Link>
                            <Link href={'https://api.whatsapp.com/send?phone=79223020555'} title={'Напиши нам в WhatsApp: +79197100555'}>
                                <Image src={iconWhatsapp} alt={'kor2basket'}/>
                            </Link>
                            <Link href={'http://vk.com/kor2basket'} >
                                <Image src={iconVk} alt={'vk.com'}/>
                            </Link>
                            <Link href={'https://www.instagram.com/kor2basket/'} >
                                <Image src={iconInstagram} alt={'icon Instagram'}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="copyright">
                        2014 - 2024. All Rights reserved.
                    </div>
                    <div className="desktop-view develop">
                        Разработка сайта -
                        <Link href={'https://daz.ru'} target={'_blank'} >daz.ru</Link>
                    </div>
                </div>
            </div>
        </footer>)
}
export default Footer;