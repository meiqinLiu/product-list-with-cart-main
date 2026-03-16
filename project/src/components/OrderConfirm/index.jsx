import React, { useState } from 'react';
import { getImage } from '@/utils/imageLoader';
import './style.less';

const order = ({ cartItems, products, onDecrease, onClose, onClearCart }) => {
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
            image: product?.image.thumbnail,
        };
    });
    const oderTotal = cartList.reduce((acc, item) => acc + item.total, 0);

    const startNewOrder = () => {
        onClearCart();
        onClose();
    };


    return (
        <div className="order-modal" onClick={onClose} >
            <div className="order" onClick={(e) => e.stopPropagation()}>
                <img src={getImage('/icon-order-confirmed.svg')} alt="check" />

                <h2>Order Confirmed</h2>
                <p className="sub-title">We hope you enjoy your food!</p>
                <div className="order-list">
                    {cartList.map((item) => (
                        <div className="order-item" key={item.name}>
                            <img className="order-item__image" src={getImage(item.image)} alt={item.name} />
                            <div className="order-item__info">
                                <h3 className="order-item__name">{item.name}</h3>
                                <span className="order-item-quantity">{item.quantity}x</span>
                                <span className="order-item-price">@${item.price}</span>
                            </div>
                            <span className="order-item-total">${item.total}</span>
                        </div>
                    ))}
                    <div className="order-total">
                        <span className="order-total-text">Order Total</span>
                        <span className="order-total-price">${oderTotal}</span>
                    </div>
                </div>

                <button className="order-button" onClick={startNewOrder} >Start New Order</button>
            </div>
        </div>
    );
};

export default order;
