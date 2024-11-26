import { getData } from "./ProductData.mjs";

export function loadProducts() {
    const productListElement = document.getElementById('product-list');
    getData('json/tents.json').then(data => {
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <img src="../images/${product.image}" alt="${product.name}" />
                <button onclick="location.href='product.html?product=${product.id}'">View Details</button>
            `;
            productListElement.appendChild(productElement);
        });
    }).catch(error => {
        console.error('Error loading product data:', error);
    });
}
