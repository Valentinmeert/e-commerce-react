import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./componants/Header";
import Main from "./componants/Main";
/* import Basket from "./componants/Basket"; */

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
          console.log(result);
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
      <div>
        <div className="App">
          <Header></Header>
          <div className="row">
            <Main products={products}></Main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
