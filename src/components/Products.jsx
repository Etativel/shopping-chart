import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
function Products({ data }) {
  return (
    <ul className="product-container">
      {data ? (
        data.map((item) => (
          <li key={item.id}>
            <ProductCard
              name={item.title}
              id={item.id}
              price={item.price}
              image={item.image}
            />
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
}

Products.propTypes = {
  data: PropTypes.array,
};

export { Products };
