const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('./../controllers/authController');
const { getAllTours, getTour, createTour, updateTour, deleteTour, getTourStats, aliasTopTours, getMonthlyPlan, getToursWithin, getDistances, uploadTourImages, resizeTourImages } = require('../controllers/tourController');
const reviewRouter = require('./reviewRoutes');


router.use('/:tourId/reviews', reviewRouter);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router.route('/tours-stat').get(getTourStats);
router.route('/monthly-plan/:year').get(protect, getMonthlyPlan);
router.route('/tours-within/:distance/center/:latlng/unit/:unit').get(getToursWithin)

router.route('/distances/:latlng/unit/:unit').get(getDistances);

router.route('/')
  .get(getAllTours)
  .post(protect, createTour)

router.route('/:id')
  .get(protect, getTour)
  .patch(protect, uploadTourImages, resizeTourImages, updateTour )
  .delete(protect, deleteTour)
 
module.exports = router;