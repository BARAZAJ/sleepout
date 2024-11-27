import { getCartItems } from './cartUtils.mjs';

const cartList = document.getElementById('cart-list');

// Fetch and display cart items
function displayCart() {
  const cartItems = getCartItems();
  if (cartItems.length > 0) {
    cartItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - ${item.price}`;
      cartList.appendChild(listItem);
    });
  } else {
    cartList.innerHTML = '<p>Your cart is empty.</p>';
  }
}

displayCart();
