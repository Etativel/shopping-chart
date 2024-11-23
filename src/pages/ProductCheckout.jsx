import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import PropTypes from "prop-types";

function ProductCheckout({ handleAddCart, cartData }) {
  const { data } = useContext(ProductsContext);
  const [productToCheckout, setProductToCheckout] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const productId = useParams();

  function handleChange(e) {
    setQuantity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(cartData);
    handleAddCart(quantity, productToCheckout[0].id);
  }
  useEffect(() => {
    if (data && data.length > 0) {
      const filteredProd = data.filter((prod) => prod.id == productId.id);
      setProductToCheckout(filteredProd);
    }
  }, [data, productId]);

  if (!productToCheckout || productToCheckout.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="prod-checkout-container">
      <h1>{productToCheckout[0].title}</h1>
      <h2>{productToCheckout[0].price}</h2>
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
