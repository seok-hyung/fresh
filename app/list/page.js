import Image from 'next/image'
import product0 from '/public/food0.png'
import product1 from '/public/food1.png'
import product2 from '/public/food2.png'

export default function List() {
  const products = [
    { name: 'Tomatoes', price: 10000, image: product0 },
    { name: 'Pasta', price: 20000, image: product1 },
    { name: 'Coconut', price: 5000, image: product2 },
  ]
  return (
    <>
      <div class="title">상품목록</div>
      {products.map((product, index) => {
        return (
          <div class="food" key={index}>
            <Image src={product.image} className="food-img" alt="food-img" />
            <h4>{product.name}</h4>
            <p>{product.price}원</p>
          </div>
        )
      })}
    </>
  )
}
