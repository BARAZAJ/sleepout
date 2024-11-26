import { getData } from "./ProductData.mjs";

export function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    
    if (!productId) {
        document.getElementById('product-detail').innerHTML = '<h1>Product not found</h1>';
        return;
    }

    getData(`../json/tents.json`).then(products => {
        const product = products.find(p => p.id == productId);
        if (!product) {
            document.getElementById('product-detail').innerHTML = '<h1>Product not found</h1>';
            return;
        }

        document.getElementById('product-detail').innerHTML = `
            <h1>${product.name}</h1>
            <img src="../images/${product.image}" alt="${product.name}" />
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    }).catch(error => {
        console.error('Error loading product details:', error);
    });
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productId });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

