import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");
const productList = document.querySelector(".product-list");

dataSource.getData().then((products) => {
  if (!products || products.length === 0) {
    console.error("No products found");
    return;
  }

  products.forEach((product) => {
    const item = document.createElement("li");
    item.className = "product-card";
    item.innerHTML = `
      <a href="/product.html?product=${product.Id}">
        <img src="${product.Image}" alt="${product.NameWithoutBrand}" />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.NameWithoutBrand}</h2>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>`;
    productList.appendChild(item);
  });
}).catch((error) => {
  console.error("Error fetching products:", error);
});

