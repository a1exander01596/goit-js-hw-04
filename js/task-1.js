function isEnoughCapacity(products, containerSize) {
  let totalQuantity = 0;
  for (let quantity of Objects.value(products)) {
    totalQuantity += 1;
  }
  return totalQuantity <= containerSize;
}
