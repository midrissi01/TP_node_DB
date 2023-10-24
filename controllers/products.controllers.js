// let products = [
//   { id: 1, name: "hp", price: 12000 },
//   { id: 2, name: "dell", price: 13000 },
//   { id: 3, name: "asus", price: 10000 },
//   { id: 4, name: "Lenovo", price: 9000 },
// ];
const Product = require("../models/Product");

async function getAllProducts(req, res) {
  const products = await Product.find();
  res.json(products);
}

async function getProductById(req, res) {
  const idP = req.params.id;
  const product = await Product.findById(idP);
  res.json(product);
}

async function addProduct(req, res) {
  const product = await Product.create(req.body);
  res.json(product);
}

async function deleteProductById(req, res) {
  const idP = req.params.id;
  const product = await Product.findByIdAndDelete(idP);
  res.json(product);
}

async function modifyById(req, res) {
  const idP = req.params.id;
  const product = await Product.findByIdAndUpdate(idP, req.body);
  res.json(product);
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
  modifyById,
};
