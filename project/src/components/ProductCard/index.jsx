import React from 'react';
import { getImage } from '@/utils/imageLoader';
import './style.less';

const ProductCard = ({ product, quantity, onIncrease, onDecrease, }) => {
    const thumbnail = getImage(product.image.thumbnail);
    const tablet = getImage(product.image.tablet);
    const mobile = getImage(product.image.mobile);


    return (
        <div className="product-card">
            <div className="product-card__image-wrapper">
                <picture className="product-card__image-picture" >
                    <source srcSet={thumbnail} media="(min-width: 1024px)" />
                    <source srcSet={tablet} media="(min-width: 768px)" />
                    <img src={mobile} alt={product.name} />
                </picture>
            </div>
            <div className="product-card__info">
                <span className="product-card__category">{product.category}</span>
                <span className="product-card__name">{product.name}</span>
                <span className="product-card__price">${product.price}</span>
            </div>
            <div className="product-card__actions">
                {quantity === 0 ? (
                    <button onClick={() => onIncrease(product)} className="product-card__actions-button">
                        <img src={getImage('/icon-add-to-cart.svg')} alt="plus" />
                        <span>Add to Cart</span>
                    </button>
                ) : (
                    <div className="product-card__actions-quantity">
                        <button onClick={onDecrease} className="product-card__actions-quantity-button" >
                            <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 9H0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            {/* <img src={getImage('/icon-decrement-quantity.svg')} alt="minus" className="product-card__actions-quantity-button-icon" /> */}
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => onIncrease(product)} className="product-card__actions-quantity-button">
                            <svg width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18V0M18 9H0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            {/* <img src={getImage('/icon-increment-quantity.svg')} alt="plus" className="product-card__actions-quantity-button-icon" /> */}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
