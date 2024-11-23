import "../styles/Navigation.css";
import PropTypes from "prop-types";
function Navigation({ cart }) {
  return (
    <div className="nav-container">
      <ul className="left-nav">
        <li className="logo">Logo</li>
        <li>MEN</li>
        <li>WOMEN</li>
      </ul>
      <ul className="right-nav">
        <li>Search bar</li>
        <li>{cart.length}</li>
      </ul>
    </div>
  );
}

Navigation.propTypes = {
  cart: PropTypes.array,
};

export { Navigation };
