export function displayCart() {
  const cartItemsElement = document.getElementById('cart-items');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
      cartItemsElement.innerHTML = '<p>Your cart is empty</p>';
      return;
  }

  cart.forEach(item => {
      const cartItemElement = document.createElement('div');
      cartItemElement.classList.add('cart-item');
      cartItemElement.innerHTML = `<p>Product ID: ${item.productId}</p>`;
      cartItemsElement.appendChild(cartItemElement);
  });
}
