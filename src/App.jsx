import { useEffect, useState } from "react";
import { fetchProducts } from "./services/api";
import { Navigation } from "./components/Navbar";
import "./styles/App.css";
import { useParams } from "react-router-dom";
import { Products } from "./components/Products";
import { ProductCheckout } from "./pages/ProductCheckout";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = useParams();
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const { data, error } = await fetchProducts();
      setData(data);
      setError(error);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <>
      <div className="appContainer">
        <Navigation />
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {Object.keys(id).length > 0 ? (
          <ProductCheckout />
        ) : (
          <Products data={data} />
        )}
      </div>
    </>
  );
}

export default App;
