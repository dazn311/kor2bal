import './Basket.styles.css';

export default function Basket() {
    return <div className="container">
        <h3 style={{textAlign: 'center'}}>Корзина</h3>
        <div className="widget">
            Корзина пустая. Еще нет выбранных товаров.
        </div>
    </div>
}