const router = require('express').Router();
const { getOverview, getTour, getLoginFrom, getAccount, updateUser, getMyTours } = require('../controllers/viewController');
const { isLoggedIn, protect } = require('../controllers/authController');
const { createBookingCheckout } = require('../controllers/bookingController');

router.get('/', createBookingCheckout, isLoggedIn, getOverview)
router.get('/tour/:slug', isLoggedIn, getTour)
router.get('/login',isLoggedIn, getLoginFrom)
router.get('/me', protect, getAccount)
router.get('/my-tours', protect, getMyTours);

router.post('/submit-user-data',protect, updateUser)


module.exports = router;