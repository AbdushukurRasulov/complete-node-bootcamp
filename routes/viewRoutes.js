const router = require('express').Router();
const { getOverview, getTour, getLoginFrom, getAccount, updateUser } = require('../controllers/viewController');
const { isLoggedIn, protect } = require('../controllers/authController');

router.get('/', isLoggedIn, getOverview)
router.get('/tour/:slug', isLoggedIn, getTour)
router.get('/login',isLoggedIn, getLoginFrom)
router.get('/me', protect, getAccount)

router.post('/submit-user-data',protect, updateUser)


module.exports = router;