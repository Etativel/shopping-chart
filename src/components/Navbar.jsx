import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import PropTypes from "prop-types";

function Navigation({ cart, query, handleQueryChange }) {
  return (
    <div className="nav-container">
      <ul className="left-nav">
        <li className="logo">Logo</li>
        <li>MEN</li>
        <li>WOMEN</li>
      </ul>
      <ul className="right-nav">
        <input type="text" value={query} onChange={handleQueryChange} />
        <li>
          <Link to="checkout">{cart.length}</Link>
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
};

export { Navigation };
