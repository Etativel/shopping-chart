function filterProducts(productsArray, query) {
  const lowerQuery = query.toLowerCase();
  console.log(query);
  return productsArray.filter((product) =>
    (product.title + product.description)
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(lowerQuery))
  );
}

export { filterProducts };
