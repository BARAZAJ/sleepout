export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId; // Product ID from the URL
      this.product = {}; // To store product details
      this.dataSource = dataSource; // Data source instance (ProductData)
    }
  
    // Initialize the ProductDetails instance
    async init() {
      // Fetch product details and store in this.product
      this.product = await this.dataSource.findProductById(this.productId);
      // Render the product details to the DOM
      this.renderProductDetails();
      // Add event listener for the "Add to Cart" button
      this.addAddToCartHandler();
    }
  
    // Render product details to the HTML
    renderProductDetails() {
      // Locate the container for product details
      const productDetailsContainer = document.getElementById('productDetails');
      if (!this.product) {
        productDetailsContainer.innerHTML = `<p>Product not found.</p>`;
        return;
      }
      
      // Generate product details HTML
      productDetailsContainer.innerHTML = `
        <h1>${this.product.Name}</h1>
        <p>${this.product.Description}</p>
        <p>Price: $${this.product.Price}</p>
        <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
      `;
    }
  
    // Add product to cart
    addToCart() {
      // Store the product in local storage
      localStorage.setItem('so-cart', JSON.stringify(this.product));
      alert(`${this.product.Name} has been added to your cart!`);
    }
  
    // Attach the "Add to Cart" button event handler
    addAddToCartHandler() {
      const addToCartButton = document.getElementById('addToCart');
      if (addToCartButton) {
        addToCartButton.addEventListener('click', () => this.addToCart());
      }
    }
  }
  