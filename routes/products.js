const express = require('express');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products');
const { protect, authorize } = require('../middlewares/auth');
const advancedResults = require('../middlewares/advancedResults');
const Product = require('../models/Product');

const router = express.Router();

router
  .route('/')
  .get(advancedResults(Product, 'user'), getProducts)
  .post(protect, authorize('user', 'admin'), createProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(protect, authorize('user', 'admin'), updateProduct)
  .delete(protect, authorize('user', 'admin'), deleteProduct);

module.exports = router;