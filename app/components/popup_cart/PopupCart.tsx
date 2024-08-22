import './PopupCart.styles.css';

export default function PopupCart() {
    return (
    <div className="popup_cart">
        <h2 className={'title'}>Корзина</h2>
        <ul className={'cart-pop-container'}>
            <li>
                <div className={'widget_shopping_cart_content'}>
                    <p className={'woocommerce-mini-cart__empty-message'}>Корзина пуста.</p>
                </div>
            </li>
        </ul>
    </div>)
}
