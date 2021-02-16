import React, { useState, useEffect } from "react";
/* import Product from "./Product";

export default function Main(props) {
  const { products } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </main>
  );
} */

function Main() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            {item.title} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}

export default Main;
