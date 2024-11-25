import ProductData from "./ProductData.mjs";
import ProductDetails from "/ProductDetails.mjs";
import { getParam } from "./utils.mjs";

// Retrieve the product ID from the URL
const productId = getParam("product");

// Create an instance of ProductData for the 'tents' category
const dataSource = new ProductData("tents");

// Create an instance of ProductDetails with the product ID and data source
const product = new ProductDetails(productId, dataSource);

// Initialize the ProductDetails instance
product.init();



