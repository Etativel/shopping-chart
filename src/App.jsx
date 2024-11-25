import { useContext, useEffect, useState } from "react";
import { Navigation } from "./components/Navbar";
import "./styles/App.css";
import { Products } from "./components/Products";
import { ProductCheckout } from "./pages/ProductCheckout";
import { ProductsContext } from "./context/ProductsContext";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout";
import { ErrorPage } from "./pages/ErrorPage";
import { filterProducts } from "./utils/filterProduct";

function App() {
  const [query, setQuery] = useState("");

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartProduct")) || []
  );

  const { data, loading, error } = useContext(ProductsContext);

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cart));
  }, [cart]);

  function handleDeleteCart(id) {
    const filtered = cart.filter((cart) => cart.productId !== id);
    setCart(filtered);
  }

  function handleClearCart() {
    setCart([]);
  }

  function handleAddAndEditCart(
    quantity,
    id,
    price,
    productImage,
    productName
  ) {
    const existingItemIndex = cart.findIndex((item) => item.productId === id);

    if (existingItemIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantityToBuy: parseInt(quantity),
            total: price * parseInt(quantity),
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const newCart = [
        ...cart,
        {
          quantityToBuy: quantity,
          productId: id,
          price: price,
          total: price * quantity,
          productImage: productImage,
          productName: productName,
        },
      ];
      setCart(newCart);
    }
  }
  return (
    <>
      <div className="appContainer">
        <Navigation
          cart={cart}
          query={query}
          handleQueryChange={handleQueryChange}
        />
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}

        <Routes>
          <Route
            path="/"
            element={
              data ? (
                <Products data={filterProducts(data, query)} query={query} />
              ) : (
                <div></div>
              )
            }
          />
          <Route
            path="product/:id"
            element={
              <ProductCheckout
                handleAddCart={handleAddAndEditCart}
                cartData={cart}
              />
            }
          />
          <Route
            path="checkout"
            element={
              <Checkout
                cart={cart}
                handleEditCart={handleAddAndEditCart}
                handleDeleteCart={handleDeleteCart}
                handleClearCart={handleClearCart}
                data={data}
              />
            }
          />
          <Route path="*" element={<ErrorPage message="Page not found!" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
