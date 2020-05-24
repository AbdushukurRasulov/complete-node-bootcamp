const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser, updateMe, deleteMe } = require('../controllers/userController');
const { signup, login, protect ,restrictTo, forgotPassword, resetPassword, updatePassword } = require('../controllers/authController');


router.post('/signup', signup);
router.post('/login', login);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/updateMypassword', protect, updatePassword);


router.patch('/updateMe', protect, updateMe );
router.delete('/deleteMe', protect, deleteMe);


router
  .get('/', getAllUsers)
  .post('/', createUser)
  .get('/:id', getUser)
  .patch('/:id', updateUser)
  .delete('/:id', protect, restrictTo('admin'), deleteUser);


module.exports = router;