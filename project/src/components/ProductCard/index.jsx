import React from 'react';
import { getImage } from '@/utils/imageLoader';

const ProductCard = ({ product, quantity, onIncrease, onDecrease }) => {
    const thumbnail = getImage(product.image.thumbnail);
    const tablet = getImage(product.image.tablet);
    const mobile = getImage(product.image.mobile);

    console.log(product.image.thumbnail, thumbnail);
    return (
        <div className="product-card">
            <div className="product-card__image-wrapper">
                <picture className="product-card__image-picture" >
                    <source srcSet={thumbnail} media="(min-width: 1024px)" />
                    <source srcSet={tablet} media="(min-width: 768px)" />
                    <img src={mobile} alt={product.name} />
                </picture>
                <img src={thumbnail} alt={product.name} />
            </div>

            <div className="product-card__info">
                <span className="product-card__category">{product.category}</span>
                <span className="product-card__name">{product.name}</span>
                <span className="product-card__price">{product.price}</span>
            </div>

            <div className="product-card__actions">
                {quantity === 0 ? (
                    <button onClick={onIncrease}>Add to Cart</button>
                ) : (
                    <div className="product-card__actions-quantity">
                        <button onClick={onDecrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={onIncrease}>+</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
