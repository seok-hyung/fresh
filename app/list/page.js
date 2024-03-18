'use client';
import Image from 'next/image';
import product0 from '/public/food0.png';
import product1 from '/public/food1.png';
import product2 from '/public/food2.png';
import { useState } from 'react';

export default function List() {
  const [products, setProducts] = useState([
    { name: 'Tomatoes', price: 10000, image: product0, count: 1, stock: 10 },
    { name: 'Pasta', price: 20000, image: product1, count: 1, stock: 8 },
    { name: 'Coconut', price: 5000, image: product2, count: 1, stock: 5 },
  ]);
  const increaseCount = (index) => {
    const newProducts = [...products];
    if (newProducts[index].count < newProducts[index].stock) {
      newProducts[index].count += 1;
      setProducts(newProducts);
    }
  };
  const decreaseCount = (index) => {
    const newProducts = [...porudcts];
    if (newProducts[index].count > 0) {
      newProducts[index].count -= 1;
      setProducts(newProducts);
    }
  };
  return (
    <>
      <div class="title">상품목록</div>
      {products.map((product, index) => {
        return (
          <div class="food" key={index}>
            <Image src={product.image} className="food-img" alt="food-img" />
            <h4>{product.name}</h4>
            <p>{product.price}원</p>
            <button
              onClick={() => {
                decreaseCount(index);
              }}
            >
              -
            </button>
            <span>{product.count}</span>
            <button
              onClick={() => {
                increaseCount(index);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </>
  );
}
