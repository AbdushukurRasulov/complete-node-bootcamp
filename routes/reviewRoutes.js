const express = require('express');
const router = express.Router({mergeParams: true});

const { protect, restrictTo } = require('./../controllers/authController');
const { getAllReview, createReview, deleteReview} = require('../controllers/reviewController');



router
  .get('/', getAllReview)
  .post('/', protect, restrictTo('user'), createReview);

router.route('/:id')
  .delete(deleteReview)

module.exports = router;