import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductCheckout() {
  const [productToCheckout, setProductToCheckout] = useState(null);
  const productId = useParams();
  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("product"));
    const filteredProd = product.filter((prod) => prod.id == productId.id);
    setProductToCheckout(filteredProd);
  }, [productId]);
  if (!productToCheckout || productToCheckout.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="prod-checkout-container">
      <h1>{productToCheckout[0].title}</h1>
      <h2>{productToCheckout[0].price}</h2>
    </div>
  );
}

export { ProductCheckout };
