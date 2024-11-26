import { setLocalStorage, getLocalStorage, qs, setClick } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    console.log("Fetched Product:", this.product); // Debug log
    if (!this.product) {
      console.error(`Product with ID ${this.productId} not found.`);
      return;
    }
    this.renderProductDetails("main");

    // Attach the add to cart functionality
    const addToCartButton = qs("#addToCart");
    if (addToCartButton) {
      addToCartButton.addEventListener("click", this.addToCart.bind(this));
    }
  }

  addToCart() {
    // Retrieve the current cart from localStorage or initialize an empty array
    const cart = getLocalStorage("so-cart") || [];

    // Check if the product is already in the cart
    if (!cart.some(item => item.Id === this.product.Id)) {
      cart.push(this.product);
      setLocalStorage("so-cart", cart);
      console.log("Product added to cart:", this.product); // Debug log
    } else {
      console.log("Product already in cart.");
    }
  }

  renderProductDetails(selector) {
    const element = qs(selector);
    element.insertAdjacentHTML("afterBegin", productDetailsTemplate(this.product));
  }
}

function productDetailsTemplate(product) {
  return `<section class="product-detail">
    <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Image}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">${product.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  </section>`;
}
