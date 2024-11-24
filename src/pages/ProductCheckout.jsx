import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

import PropTypes from "prop-types";

function ProductCheckout({ handleAddCart }) {
  const { data } = useContext(ProductsContext);
  const [productToCheckout, setProductToCheckout] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const productId = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (data && data.length > 0) {
      const filteredProd = data.filter((prod) => prod.id == productId.id);
      if (filteredProd.length > 0) {
        setProductToCheckout(filteredProd[0]);
      } else {
        navigate("/not-found", { replace: true });
      }
    }
  }, [data, productId, navigate]);

  function handleChange(e) {
    setQuantity(e.target.value);
  }

  function handleSubmit(e) {
    console.log(productToCheckout);
    e.preventDefault();
    handleAddCart(quantity, productToCheckout.id, productToCheckout.price);
  }

  if (!productToCheckout || productToCheckout.length === 0) {
    return;
  }
  return (
    <div className="prod-checkout-container">
      <h1>{productToCheckout.title}</h1>
      <h2>{productToCheckout.price}</h2>
      <img src={productToCheckout.image} alt="productImage" />
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="number"
          min={1}
          value={quantity}
          max={100}
          onChange={handleChange}
        />
        <button>Add to cart</button>
      </form>
    </div>
  );
}

ProductCheckout.propTypes = {
  handleAddCart: PropTypes.func,
  cartData: PropTypes.array,
};

export { ProductCheckout };
