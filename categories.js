const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Temporary data (instead of database)
let categories = [
  { id: 1, name: "Fruits", image: "fruits.jpg", description: "Fresh fruits" },
  { id: 2, name: "Vegetables", image: "vegetables.jpg", description: "Green veggies" },
  { id: 3, name: "Dairy", image: "dairy.jpg", description: "Milk and products" }
];

// Get all categories
app.get("/categories", (req, res) => {
  res.json(categories);
});

// Add a category
app.post("/categories", (req, res) => {
  const { name, image, description } = req.body;
  const newCategory = {
    id: categories.length + 1,
    name,
    image,
    description
  };
  categories.push(newCategory);
  res.json(newCategory);
});

// Delete a category
app.delete("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  categories = categories.filter(cat => cat.id !== id);
  res.json({ message: "Category deleted" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
