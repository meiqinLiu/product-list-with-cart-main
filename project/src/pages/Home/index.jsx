import React, { useState } from 'react';
import './style.less';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import rawData from '@/data.json';

const Home = () => {
  const products = rawData;
  const [cartItems, setCartItems] = useState({
    'Macaron Mix of Five': { quantity: 2 },
    'Vanilla Bean Crème Brûlée': { quantity: 1 },
  });

  const handleIncrease = (item) => {
    setCartItems((prev) => {
      const quantity = (prev[item.name]?.quantity || 0) + 1;
      return { ...prev, [item.name]: { quantity } };
    });
  };
  const handleDecrease = (item) => {
    setCartItems((prev) => {
      const quantity = (prev[item.name]?.quantity || 0) - 1;
      // 如果数量为 0，删除这个属性
      if (quantity === 0) {
        const { [item.name]: removed, ...rest } = prev;
        return rest;
      }
      // 否则更新数量
      return { ...prev, [item.name]: { quantity } };
    });
  };
  const clearCart = () => {
    setCartItems({});
  };
  return (
    // Home 里大致结构（伪代码思路）
    <section className="home">


      <div className="home-layout">
        <div className="home-layout-left">
          <h1>Desserts</h1>
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
        </div>
        <Cart
          products={products}
          cartItems={cartItems}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onClearCart={clearCart}
        />
      </div>
    </section>
  );
};

export default Home;

