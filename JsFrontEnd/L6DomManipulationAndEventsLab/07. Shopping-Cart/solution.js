function solve() {
  let objectCart = {};
  const textarea = document.querySelector("textarea");
  const checkout = document.getElementsByClassName("checkout")[0];
  const buttuns = document.getElementsByClassName("add-product");
  for (let i = 0; i < buttuns.length; i++) {
    buttuns[i].addEventListener("click", clickOn);
  }
  checkout.addEventListener("click", clickCheckout);

  function clickCheckout () {
   let allBayProduct = [];
   let totalPrice = 0;
   for (let i = 0; i < buttuns.length; i++) {
     buttuns[i].removeEventListener("click", clickOn);
   }
   for (const key in objectCart) {
     allBayProduct.push(key);
     totalPrice += objectCart[key];
   }
   textarea.value += `You bought ${allBayProduct.join(
     ", "
   )} for ${totalPrice.toFixed(2)}.`;
   checkout.removeEventListener("click", clickCheckout);
 };

  function clickOn(e) {
    const nameOfProduct =
      e.currentTarget.parentNode.parentNode.getElementsByClassName(
        "product-title"
      )[0].textContent;
    const price = Number(
      e.currentTarget.parentNode.parentNode.getElementsByClassName(
        "product-line-price"
      )[0].textContent
    );
    if (!objectCart[nameOfProduct]) {
      objectCart[nameOfProduct] = price;
    } else {
      objectCart[nameOfProduct] += price;
    }
    textarea.value += `Added ${nameOfProduct} for ${price.toFixed(2)} to the cart.\n`;
  }
}
