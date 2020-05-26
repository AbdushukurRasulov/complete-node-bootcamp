const express = require('express');
const router = express.Router({mergeParams: true});

const { protect, restrictTo } = require('./../controllers/authController');
const { getAllReview, getReview, createReview, deleteReview, updateReview, setTourUserIds} = require('../controllers/reviewController');

router.use(protect);

router
  .get('/', getAllReview)
  .post('/', restrictTo('admin', 'user'), setTourUserIds, createReview);

router.route('/:id')
  .get(getReview)
  .delete(deleteReview)
  .patch(updateReview)

module.exports = router;