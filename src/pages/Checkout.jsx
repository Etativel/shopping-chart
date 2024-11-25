import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTotalPrice } from "../utils/calculatePrice";
function Checkout({ cart, handleClearCart, handleDeleteCart }) {
  const [updateCart, setUpdateCart] = useState(cart);
  const navigate = useNavigate();
  function handleChange(e, item) {
    const quantity = Number(e.target.value);
    const updated = {
      ...item,
      quantityToBuy: quantity,
      total: quantity * item.price,
    };
    const newCart = updateCart.map((cartItem) =>
      cartItem.productId === item.productId ? updated : cartItem
    );
    setUpdateCart(newCart);
  }
  function handleCheckout() {
    const totalPrice = getTotalPrice(updateCart);

    handleClearCart();

    alert(`Your total is ${totalPrice}`);
    navigate("/");
  }

  return (
    <div className="checkout-container">
      <button onClick={handleCheckout}>checkout</button>

      <ul key={1}>
        {updateCart.map((item) => {
          return (
            <li key={item.productId}>
              <h1>{item.productName}</h1>
              <img src={item.productImage} alt="productImage" />
              <input
                min={1}
                max={100}
                value={item.quantityToBuy}
                type="number"
                onChange={(e) => handleChange(e, item)}
              />
              {/* <button>update</button> */}
              <button onClick={() => handleDeleteCart(item.productId)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array,
  handleEditCart: PropTypes.func,
  handleDeleteCart: PropTypes.func,
  handleClearCart: PropTypes.func,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export { Checkout };
