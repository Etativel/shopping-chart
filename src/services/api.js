const CACHE_KEY = "product";

export const fetchProducts = async () => {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      console.log("using cached data");
      return { data: JSON.parse(cachedData), error: null };
    }
    const response = await fetch("https://fakestoreapi.com/products");
    console.log("using new fetched data");
    if (!response.ok) {
      throw new Error(`HTTPS error: status ${response.status}`);
    }
    const data = await response.json();

    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    return { data: data, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
