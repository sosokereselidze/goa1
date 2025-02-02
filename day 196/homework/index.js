const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;
const DATA_FILE = "products.json";

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Helper function to read products from the file
const readProducts = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

// Helper function to write products to the file
const writeProducts = (products) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
};

// GET /products - Fetch all products with sorting, filtering, and pagination
app.get("/products", (req, res) => {
  const { sort, minPrice, maxPrice, limit } = req.query;
  let products = readProducts();

  // Filter by price
  if (minPrice) {
    products = products.filter((p) => p.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    products = products.filter((p) => p.price <= parseFloat(maxPrice));
  }

  // Sort by price
  if (sort === "ascending") {
    products.sort((a, b) => a.price - b.price);
  } else if (sort === "descending") {
    products.sort((a, b) => b.price - a.price);
  }

  // Pagination
  if (limit) {
    products = products.slice(0, parseInt(limit));
  }

  res.json(products);
});

// GET /products/:id - Fetch a single product by ID
app.get("/products/:id", (req, res) => {
  const products = readProducts();
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

// POST /products - Add a new product
app.post("/products", (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ error: "Name and price are required" });
  }

  const products = readProducts();
  const newProduct = {
    id: products.length + 1, // Simple ID generation
    name,
    price: parseFloat(price),
  };

  products.push(newProduct);
  writeProducts(products);

  res.status(201).json(newProduct);
});

// PUT /products/:id - Update an existing product
app.put("/products/:id", (req, res) => {
  const { name, price } = req.body;
  const products = readProducts();
  const productIndex = products.findIndex((p) => p.id === parseInt(req.params.id));

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  // Update product fields
  if (name) {
    products[productIndex].name = name;
  }
  if (price) {
    products[productIndex].price = parseFloat(price);
  }

  writeProducts(products);
  res.json(products[productIndex]);
});

// DELETE /products/:id - Delete a product
app.delete("/products/:id", (req, res) => {
  const products = readProducts();
  const productIndex = products.findIndex((p) => p.id === parseInt(req.params.id));

  if (productIndex === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const deletedProduct = products.splice(productIndex, 1);
  writeProducts(products);

  res.json(deletedProduct);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});