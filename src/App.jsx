import { useState, useEffect } from "react";

import { data } from "./data";
import Product from "./Product";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length == 0) return setTotalPrice(0);

    const total = cart
      .map((item) => item.price)
      .reduce((prev, next) => prev + next);
    setTotalPrice(total);
  }, [cart]);

  return (
    <main>
      <header>Estampitiency</header>
      <section>
        {products.map((product) => (
          <article key={product.id}>
            <Product
              {...product}
              products={products}
              cart={cart}
              setCart={setCart}
            />
          </article>
        ))}
      </section>
      <aside>
        <button>
          {cart.length} productos (total: $ {totalPrice})
        </button>
      </aside>
      <footer>
        Encontrá la consigna de este ejercicio y otros más{" "}
        <a href="https://github.com/goncy/interview-challenges/tree/main/simple-cart">
          acá
        </a>
      </footer>
    </main>
  );
}

export default App;
