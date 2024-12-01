import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTotalPrice } from "../utils/calculatePrice";
import { Link } from "react-router-dom";
function Checkout({ cart, handleClearCart, handleDeleteCart, setQuery }) {
  const [updateCart, setUpdateCart] = useState(cart);
  const navigate = useNavigate();
  const totalPrice = useMemo(() => {
    return getTotalPrice(updateCart);
  }, [updateCart]);
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

  function handleDeleteAndUpdate(id) {
    const filteredCart = updateCart.filter((item) => item.productId !== id);
    setUpdateCart(filteredCart);
    handleDeleteCart(id);
    if (filteredCart.length === 0) {
      navigate(-1);
    }
  }

  function handleCheckout() {
    // const totalPrice = getTotalPrice(updateCart);
    setQuery("");
    handleClearCart();

    alert(`Your total is ${totalPrice}`);
    navigate("/");
  }

  return (
    <div className="checkout-container">
      {updateCart.length <= 0 ? (
        <>
          <h1>There is no product yet</h1>
          <Link to="/">
            <button>Back to shop</button>
          </Link>
        </>
      ) : (
        <>
          <h1>{totalPrice.toFixed(2)}</h1>
          <button onClick={handleCheckout}>checkout</button>
        </>
      )}

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
              <button onClick={() => handleDeleteAndUpdate(item.productId)}>
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
  setQuery: PropTypes.func,
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
