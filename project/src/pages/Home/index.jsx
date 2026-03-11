
import React from 'react';
import './style.less';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import rawData from '@/data.json';

const Home = () => {
  const products = rawData;
  const cartItems = {};
  const handleIncrease = (item) => {
    cartItems[item.name] = (cartItems[item.name] || 0) + 1;
  };
  const handleDecrease = (item) => {
    cartItems[item.name] = (cartItems[item.name] || 0) - 1;
  };
  return (
    // Home 里大致结构（伪代码思路）
    <section className="home">
      <h1>Desserts</h1>

      <div className="home-layout">
        <div className="product-list">
          {products.map((item) => (
            <ProductCard
              key={item.name}
              product={item}
              quantity={cartItems[item.name]?.quantity ?? 0}
              onIncrease={() => handleIncrease(item)}
              onDecrease={() => handleDecrease(item)}
            />
          ))}
        </div>

        <Cart
          cartItems={cartItems}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>
    </section>
  );
};

export default Home;

