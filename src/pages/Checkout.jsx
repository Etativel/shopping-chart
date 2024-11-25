import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Checkout({ cart, handleEditCart, data }) {
  const [checkoutProduct, setCheckoutProduct] = useState(null);
  useEffect(() => {
    setCheckoutProduct(cart);
  }, [cart]);

  function showData() {
    console.log(cart);
    console.log(checkoutProduct);
    console.log(data);
  }
  return (
    <div className="checkout-container" onClick={showData}>
      Btn
    </div>
  );
}

Checkout.propTypes = {
  cart: PropTypes.array,
  handleEditCart: PropTypes.func,
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
