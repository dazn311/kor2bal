import Link from "next/link";
import Image from "next/image";
import vkIcon from "../../assets/icons/vk.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import chatIcon from "../../assets/icons/chat.svg";
import telegramIcon from "../../assets/icons/telegram.svg";
import viberIcon from "../../assets/icons/viber.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import emailIcon from "../../assets/icons/email.svg";
import callbackIcon from "../../assets/icons/callback-chat.svg";
import './TopSoc.styles.css';

export  default function TopSoc() {
    return (
    <div className="col col-4 top_soc">
        <Link href="http://vk.com/kor2sket" className="soc_item" target="_blank">
            <Image
                src={vkIcon}
                width={17}
                height={17}
                alt="vkIcon"
            />
        </Link>
        <Link href="https://www.instagram.com/kor2sket/" className="soc_item" target="_blank">
            <Image
                src={instagramIcon}
                width={17}
                height={17}
                alt="instagramIcon"
            />
        </Link>
        <Link href="#" id="js-socials-button" className="soc_item">
            <Image
                src={chatIcon}
                width={17}
                height={17}
                alt="chatIcon"
            />
        </Link>
        <div id="js-socials-container" className="socials-container hidden">
            <ul>
                <li>
                    <Link href="https://tmtr.me/kor2sket" target="_blank" title="Напиши нам в Telegram: @com3">
                        <Image
                            src={telegramIcon}
                            width={17}
                            height={17}
                            alt="telegramIcon"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="viber://chat?number=+79223333" target="_blank" title="Напиши нам в Viber: +79130225">
                        <Image
                            src={viberIcon}
                            width={17}
                            height={17}
                            alt="viberIcon"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://api.whatsapp.com/send?phone=792230333" target="_blank" title="Напиши нам в WhatsApp: +7919330225">
                        <Image
                            src={whatsappIcon}
                            width={17}
                            height={17}
                            alt="WhatsApp"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="mailto:info@kor2sket.ru" title="Напиши на почту: info@kor2sket.ru">
                        <Image
                            src={emailIcon}
                            width={17}
                            height={17}
                            alt="mailto"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="#" className="js-open-callback-form" title="Написать онлайн">
                        <Image
                            src={callbackIcon}
                            width={17}
                            height={17}
                            alt="callbackIcon"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    </div>)
}
