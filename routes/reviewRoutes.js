const express = require('express');
const router = express.Router({mergeParams: true});

const { protect, restrictTo } = require('./../controllers/authController');
const { getAllReview, getReview, createReview, deleteReview, updateReview, setTourUserIds} = require('../controllers/reviewController');



router
  .get('/', getAllReview)
  .post('/', protect, restrictTo('user'), setTourUserIds, createReview);

router.route('/:id')
  .get(getReview)
  .delete(deleteReview)
  .patch(updateReview)

module.exports = router;