import { useState } from "react";
export default function Product({
  id,
  image,
  title,
  description,
  cart,
  setCart,
  products,
}) {
  const [counter, setCounter] = useState(0);

  const removeFromCart = (id) => {
    const filteredProducts = cart.filter((item) => item.id !== id);
    const productCoincidences = cart.filter((item) => item.id === id);
    productCoincidences.length > 1
      ? setCart([...filteredProducts, ...productCoincidences.slice(1)])
      : setCart(filteredProducts);
    setCounter((prev) => prev - 1);
  };

  const addToCart = (id) => {
    const foundProduct = products.find((product) => product.id === id);
    setCart([...cart, foundProduct]);
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <img src={image} />
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      {counter > 0 ? (
        <div className="product-controls">
          <button onClick={() => removeFromCart(id)}>-</button>
          <span>{counter}</span>
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      ) : (
        <button onClick={() => addToCart(id)}>Agregar</button>
      )}
    </>
  );
}
