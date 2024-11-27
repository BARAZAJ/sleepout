export function renderProductCard(product) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <a href="product.html?id=${product.id}">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
    </a>
  `;
  return listItem;
}
