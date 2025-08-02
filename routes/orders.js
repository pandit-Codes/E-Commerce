const express = require('express');
const {
  createOrder,
  getOrder,
  getMyOrders,
  getOrders,
  updateOrder,
  deleteOrder
} = require('../controllers/orders');
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

router.route('/').post(protect, createOrder).get(protect, authorize('admin'), getOrders);
router.route('/me').get(protect, getMyOrders);
router
  .route('/:id')
  .get(protect, getOrder)
  .put(protect, authorize('admin'), updateOrder)
  .delete(protect, authorize('admin'), deleteOrder);

module.exports = router;