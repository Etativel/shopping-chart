/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <ProductsContext.Provider value={{ data, error, loading }}>
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsContext, ProductsProvider };
