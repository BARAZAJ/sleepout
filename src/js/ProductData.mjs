export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `/json/${category}.json`;
  }

  async getData() {
    const response = await fetch(this.path);
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((product) => product.Id === id);
  }
}


export function fetchProducts() {
  return Promise.resolve(products);
}

export function fetchProductById(id) {
  return Promise.resolve(products.find(product => product.id === id));
}

