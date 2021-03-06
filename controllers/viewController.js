const Tour = require('../models/tourModel');
const User = require('../models/userModel');
const Booking = require('../models/bookingModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync( async (req, res, next) => {
  // 1) Get tour data from collection
  const tours = await Tour.find()
  // 2) Build template
  // 3) Render that template using tour data from 1
  res.status(200).render('overview', {
    title: 'All tours',
    tours
  })
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'reivew rating user'
  });

  if (!tour) {
    return next(new AppError('There is no tour with that name', 404))
  }

  // 2) Build template
  // 3) Render template using data form 1)
  res.status(200).render('tour', {
    title: tour.name,
    tour
  })
});

exports.getLoginFrom = (req, res) => {
  res.status(200).render('login', {
    title: 'Log in'
  })
}

exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Account'
  })
}

exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Booking.find({ user: req.user.id })
  // 2) Find tours with returned IDs
  const tourIds = bookings.map(el => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIds } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours
  })
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.id, {
    name: req.body.name,
    email: req.body.email
  }, {
    new: true,
    runValidators: true
  });

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  })
})