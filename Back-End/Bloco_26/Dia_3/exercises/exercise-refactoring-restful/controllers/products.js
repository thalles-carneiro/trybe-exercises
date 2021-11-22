const express = require('express');
const statusCode = require('http-status-codes').StatusCodes;
const ProductModel = require('../models/products');

const router = express.Router({ mergeParams: true });

router.get('/', async (_req, res, _next) => {
  try {
    const products = await ProductModel.getAll();

    if(!products) {
      return res.status(statusCode.NOT_FOUND).end();
    }

    return res.status(statusCode.OK).json(products);
  } catch (error) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).end();
  }
});

router.get('/:id', async (req, res, _next) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.getById(id);

    if(!product) {
      return res.status(statusCode.NOT_FOUND).end();
    }

    return res.status(statusCode.OK).json(product);
  } catch (error) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).end();
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, brand } = req.body;

    const newProduct = await ProductModel.add(name, brand);

    return res.status(statusCode.CREATED).json(newProduct);
  } catch (error) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).end();
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductModel.exclude(id);

    return res.status(statusCode.OK).json(products);
  } catch (error) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).end();
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, brand } = req.body;
  
    const products = await ProductModel.update(id, name, brand);

    return res.status(statusCode.OK).json(products);
  } catch (error) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).end();
  }
});

module.exports = router;