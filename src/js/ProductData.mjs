const products = [
  {
    id: '1',
    name: 'Ajax Tent - 3-Person',
    price: '$199.99',
    image: '/images/tents/ajax-tent.jpg',
    detailPage: true,
  },
  {
    id: '2',
    name: 'Talus Tent - 4-Person',
    price: '$249.99',
    image: '/images/tents/talus-tent.jpg',
    detailPage: true,
  },
];

export function fetchProducts() {
  return Promise.resolve(products);
}

export function fetchProductById(id) {
  return Promise.resolve(products.find(product => product.id === id));
}

