import Link from "next/link";
import Image from "next/image";
import userIcon from "../../assets/icons/user.svg";
import wishlistIcon from "../../assets/icons/wishlist-icon.svg";
import basketIcon from "../../assets/icons/basket.svg";
import './EnterWrap.styles.css';

export default function EnterWrap() {
    return (
        <div className="col col-4 enter_wrap">
            <div className="status">
                <Link href="#" className="js-status-order">Статус заказа</Link>
            </div>
            <div className="user">
                <Link href="/cabinet" >
                    <Image
                        src={userIcon}
                        width={20}
                        height={20}
                        alt={'login'}/>
                </Link>
            </div>
            <div className="wishlist">
                <Link href="/wishlist" >
                    <Image
                        src={wishlistIcon}
                        width={20}
                        height={20}
                        alt={'login'}/>
                </Link>
            </div>
            <div className="cart">
                <Link href="#" >
                    <Image
                        src={basketIcon}
                        width={20}
                        height={20}
                        alt={'login'}/>
                </Link>
            </div>
        </div>)
}