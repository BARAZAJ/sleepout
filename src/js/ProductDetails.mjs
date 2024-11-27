import ProductData from "./ProductData.mjs";
import { getParam, setLocalStorage } from "./utils.mjs";

const productId = getParam("product");
const dataSource = new ProductData("tents");

dataSource.findProductById(productId).then((product) => {
  const productSection = document.querySelector(".product-detail");
  productSection.innerHTML = `
    <h3>${product.Brand.Name}</h3>
    <h2>${product.NameWithoutBrand}</h2>
    <img src="${product.Image}" alt="${product.NameWithoutBrand}" />
    <p>${product.DescriptionHtmlSimple}</p>
    <button id="addToCart">Add to Cart</button>
  `;

  document.getElementById("addToCart").addEventListener("click", () => {
    const cart = getLocalStorage("so-cart") || [];
    cart.push(product);
    setLocalStorage("so-cart", cart);
  });
});
