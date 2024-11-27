import { getLocalStorage } from "./utils.mjs";

const productList = document.querySelector(".product-list");
const emptyCartMessage = document.querySelector(".empty-cart-message");

const cartItems = getLocalStorage("so-cart") || [];

if (cartItems.length === 0) {
  emptyCartMessage.style.display = "block";
} else {
  emptyCartMessage.style.display = "none";
  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "cart-card";
    li.innerHTML = `
      <img src="${item.Image}" alt="${item.Name}" />
      <h2>${item.Name}</h2>
      <p>$${item.FinalPrice}</p>
    `;
    productList.appendChild(li);
  });
}

