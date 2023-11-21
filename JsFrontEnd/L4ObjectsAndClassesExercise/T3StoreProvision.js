function storeProvision(localProductArr, deliveryPrductArr) {
  let localProduct = {};
  for (let i = 0; i < localProductArr.length; i++) {
    let productName = localProductArr[i];
    let quantity = Number(localProductArr[++i]);
    localProduct[productName] = quantity;
  }

  for (let i = 0; i < deliveryPrductArr.length; i++) {
    let productName = deliveryPrductArr[i];
    let quantity = Number(deliveryPrductArr[++i]);
    if (localProduct.hasOwnProperty(productName)) {
      localProduct[productName] += quantity;
    } else {
      localProduct[productName] = quantity;
    }
  }
  Object.entries(localProduct).forEach((Element) => {
    let [key, value] = Element;
    console.log(`${key} -> ${value}`);
  });
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
