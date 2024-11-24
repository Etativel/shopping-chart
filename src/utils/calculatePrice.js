function calculatePrice(quantity, price) {
  return parseInt(quantity) * price;
}

function getTotalPrice(items) {
  return items.reduce((accumulator, { total }) => accumulator + total, 0);
}

export { calculatePrice, getTotalPrice };
