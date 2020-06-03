const express = require('express');
const router = express.Router({mergeParams: true});

const {getCheckoutSession, getAllBookings, createBooking, getBooking, updateBooking, deleteBooking }= require('./../controllers/bookingController');
const { protect} = require('./../controllers/authController');

router.use(protect);

router.get('/checkout-session/:tourId', getCheckoutSession);

router.route('/')
  .get(getAllBookings)
  .post(createBooking)

router.route('/:id')
  .get(getBooking)
  .patch(updateBooking)
  .delete(deleteBooking)

module.exports = router;