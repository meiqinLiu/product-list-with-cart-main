import React, { useState } from 'react';
import { getImage } from '@/utils/imageLoader';
import './style.less';
import OrderConfirm from '@/components/OrderConfirm';

const Cart = ({ cartItems, products, onDecrease, onClearCart }) => {
    const [isOpen, setIsOpen] = useState(false);
    const cartList = Object.keys(cartItems).map((item) => {
        const product = products.find((product) => product.name === item);
        const price = product?.price;
        const quantity = cartItems[item].quantity;
        const total = price * quantity;

        return {
            name: item,
            quantity,
            price,
            total,
        };
    });
    const oderTotal = cartList.reduce((acc, item) => acc + item.total, 0);

    const total = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = cartList.reduce((acc, item) => acc + item.quantity, 0);

    // 打开确认弹窗时：锁定 body 滚动，并补偿滚动条宽度，避免布局抖动
    const orderConfirm = () => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        const bodyStyle = document.body.style;

        if (scrollBarWidth > 0) {
            // 先把原来的 padding-right 存起来，关闭时还原
            document.body.dataset.originalPaddingRight = bodyStyle.paddingRight || '';
            bodyStyle.paddingRight = `${scrollBarWidth}px`;
        }

        document.body.classList.add('no-scroll');
        setIsOpen(true);
    };

    // 关闭确认弹窗时：恢复 body 的样式
    const handleClose = () => {
        const bodyStyle = document.body.style;
        const originalPaddingRight = document.body.dataset.originalPaddingRight;

        if (originalPaddingRight !== undefined) {
            bodyStyle.paddingRight = originalPaddingRight;
            delete document.body.dataset.originalPaddingRight;
        }

        document.body.classList.remove('no-scroll');
        setIsOpen(false);
    };

    return (
        <>
            <div className="cart">
                <h2>Your Cart ({totalQuantity})</h2>
                <div className="cart-list">
                    {cartList.map((item) => (
                        <div className="cart-item" key={item.name}>
                            <h3 className="cart-item__name">{item.name}</h3>
                            <span className="cart-item-quantity">x{item.quantity}</span>
                            <span className="cart-item-price">@${item.price}</span>
                            <span className="cart-item-total">${item.total}</span>
                            <span className="cart-item-actions">
                                <button className="cart-item-actions-button" onClick={() => onDecrease(item)}>
                                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.375 9.375L5 6L1.625 9.375l-1-1L4 5L0.625 1.625l1-1L5 4L8.375 0.625l1 1L6 5l3.375 3.375-1 1Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <span className="cart-total-text">Order Total</span>
                    <span className="cart-total-price">${oderTotal}</span>
                </div>
                <div className="cart-delivery">
                    <img src={getImage('/icon-carbon-neutral.svg')} alt="delivery" />
                    <span className="cart-delivery-text">This is a carbon-neutrafl delivery</span>
                </div>
                <button className="cart-button" onClick={() => orderConfirm()} >Confirm Order</button>
            </div>
            {isOpen && <OrderConfirm cartItems={cartItems} products={products} onDecrease={onDecrease} onClose={handleClose} onClearCart={onClearCart} />}
        </>
    );
};

export default Cart;
