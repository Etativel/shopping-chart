import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/ProductCheckout.css";

function ProductCheckout({ handleAddCart }) {
  const { data } = useContext(ProductsContext);
  const productId = useParams();

  const [productToCheckout, setProductToCheckout] = useState(null);
  const [quantity, setQuantity] = useState(1);

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
    handleAddCart(
      quantity,
      productToCheckout.id,
      productToCheckout.price,
      productToCheckout.image,
      productToCheckout.title
    );
  }

  if (!productToCheckout || productToCheckout.length === 0) {
    return;
  }
  return (
    <div className="prod-checkout-container">
      <div className="p-left">
        <img
          src={productToCheckout.image}
          alt="productImage"
          className="prod-img"
        />
        <div className="desc">{productToCheckout.description}</div>
      </div>
      <div className="p-right">
        <h1>{productToCheckout.title}</h1>
        <div className="container-price">
          <div className="price-n-quant">
            <div className="price">{productToCheckout.price}</div>
            <div className="quantity">
              <form
                action="submit"
                className="quantity-form"
                onSubmit={handleSubmit}
              >
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  max={100}
                  onChange={handleChange}
                  className="quantity-input"
                />

                <button className="add-cart-btn">+ Add to cart</button>
              </form>
            </div>
          </div>
        </div>

        <Link to="/checkout">
          <button className="cn-btn">Checkot Now</button>
        </Link>
      </div>
    </div>
  );
}

ProductCheckout.propTypes = {
  handleAddCart: PropTypes.func,
  cartData: PropTypes.array,
};

export { ProductCheckout };
