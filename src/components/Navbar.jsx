import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import PropTypes from "prop-types";
import cartIcon from "../assets/icons/shopping-cart.png";

function Navigation({ cart, query, handleQueryChange, setQuery }) {
  function handleCategory(category) {
    setQuery(category);
  }
  return (
    <div className="nav-container">
      <span className="logo">
        <Link className="link cat-btn" to="/">
          STORE
        </Link>
      </span>

      <ul className="left-nav">
        <Link to="/" className="link" onClick={() => handleCategory("")}>
          HOME
        </Link>
        <li className="cat-btn" onClick={() => handleCategory("men")}>
          MEN
        </li>
        <li className="cat-btn" onClick={() => handleCategory("women")}>
          WOMEN
        </li>
      </ul>

      <ul className="right-nav">
        <input
          type="text"
          value={query}
          placeholder="Search"
          onChange={handleQueryChange}
          className="queryInput"
        />
        <li>
          <Link to="checkout" className="cart-container">
            <img src={cartIcon} alt="cartIcon" className="cart-icon icon" />
            <p className="cart-length">{cart.length}</p>
          </Link>
        </li>
        {/* <li>{getTotalPrice(cart)}</li> */}
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  cart: PropTypes.array,
  query: PropTypes.string,
  handleQueryChange: PropTypes.func,
  setQuery: PropTypes.func,
};

export { Navigation };
