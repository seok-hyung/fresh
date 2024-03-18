export default function Cart() {
  const products = [
    { name: 'Tomatoes', price: 10000 },
    { name: 'Pasta', price: 20000 },
    { name: 'Coconut', price: 5000 },
  ]
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem products={products} />
      <Banner content="롯데카드" />
    </div>
  )
}

const CartItem = ({ products }) => {
  return (
    <>
      {products.map((product, index) => {
        return (
          <div className="cart-item" key={index}>
            <h4>{product.name}</h4>
            <p>{product.price}원</p>
            <p>1개</p>
          </div>
        )
      })}
    </>
  )
}
const Banner = ({ content }) => {
  return <h5>{content} 결제 행사중</h5>
}
