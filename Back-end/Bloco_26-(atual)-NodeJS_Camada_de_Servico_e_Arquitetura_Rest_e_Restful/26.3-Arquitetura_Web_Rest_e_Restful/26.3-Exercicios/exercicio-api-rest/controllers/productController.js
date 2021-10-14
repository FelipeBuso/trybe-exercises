const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();
  if (!products) return res.status(500).json({ mesage: "Internal Servidor Error"});

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);
  if (!product) return res.status(500).json({ mesage: "Internal Servidor Error"});

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);
  if (!newProduct) return res.status(500).json({ mesage: "Internal Servidor Error"});

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);
  if (!products) return res.status(500).json({ mesage: "Internal Servidor Error"});

  res.status(200).json({ message: "product delete succefull"});
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);
  if (!products) return res.status(500).json({ mesage: "Internal Servidor Error"});

  res.status(200).json({ name, brand });
});

module.exports = router;