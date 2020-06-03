const express = require('express');
const router = express.Router();

const { getAllUsers, getUser, createUser, updateUser, deleteUser, updateMe, deleteMe, getMe, uploadUserPhoto, resizeUserPhoto } = require('../controllers/userController');
const { signup, login, logout, protect ,restrictTo, forgotPassword, resetPassword, updatePassword } = require('../controllers/authController');

router
  .post('/signup', signup)
  .post('/login', login)
  .get('/logout', logout)
  .post('/forgotPassword', forgotPassword)
  .patch('/resetPassword/:token', resetPassword)

router.use(protect);

router
  .get('/me', getMe, getUser)
  .patch('/updateMe', uploadUserPhoto, resizeUserPhoto, updateMe)
  .patch('/updateMypassword', updatePassword)
  .delete('/deleteMe', deleteMe);

router
  .get('/', getAllUsers)
  .post('/', createUser)
  .get('/:id', getUser)
  .patch('/:id', updateUser)
  .delete('/:id', restrictTo('admin'), deleteUser);

module.exports = router;