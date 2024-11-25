function filterProducts(productsArray, query) {
  const lowerQuery = query.toLowerCase();

  return productsArray.filter((product) =>
    product.title
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(lowerQuery))
  );
}

export { filterProducts };
