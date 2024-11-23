import { useContext, useEffect, useState } from "react";
import { Navigation } from "./components/Navbar";
import "./styles/App.css";
import { useParams } from "react-router-dom";
import { Products } from "./components/Products";
import { ProductCheckout } from "./pages/ProductCheckout";
import { ProductsContext } from "./context/ProductsContext";

function App() {
  const id = useParams();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartProduct")) || []
  );
  const { data, loading, error } = useContext(ProductsContext);

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cart));
  }, [cart]);

  function handleAddCart(quantity, id) {
    const existingItemIndex = cart.findIndex((item) => item.productId === id);

    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantityToBuy: parseInt(quantity),
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const newCart = [...cart, { quantityToBuy: quantity, productId: id }];
      setCart(newCart);
    }
  }
  return (
    <>
      <div className="appContainer">
        <Navigation cart={cart} />
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {Object.keys(id).length > 0 ? (
          <ProductCheckout handleAddCart={handleAddCart} cartData={cart} />
        ) : (
          <Products data={data} />
        )}
      </div>
    </>
  );
}

export default App;
