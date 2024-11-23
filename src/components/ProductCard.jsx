import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function ProductCard({ name, price, id, image }) {
  return (
    <div className={`product-${id} product-container`}>
      <Link to={`product/${id}`}>
        <p className="prod-name">{name}</p>
        <p className="prod-price">{price}</p>
        <img src={image} alt={`product-img-${id}`} />
      </Link>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  image: PropTypes.string,
};

export default ProductCard;
