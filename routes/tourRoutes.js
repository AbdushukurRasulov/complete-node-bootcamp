const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('./../controllers/authController');
const { getAllTours, getTour, createTour, updateTour, deleteTour, getTourStats, aliasTopTours, getMonthlyPlan } = require('../controllers/tourController');
const reviewRouter = require('./reviewRoutes');


router.use('/:tourId/reviews', reviewRouter);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tours-stat').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

router.route('/')
  .get(protect, getAllTours)
  .post(protect, createTour)

router.route('/:id')
  .get(protect, getTour)
  .patch(protect, updateTour)
  .delete(protect, deleteTour)

// router.post('/:tourId/reviews', protect, restrictTo('user'), createReview);

module.exports = router;