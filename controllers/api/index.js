const router = require('express').Router();
const noteRoutes = require('./noteRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const homepageRoutes = require('../homepageRoutes');

router.use('/users', userRoutes);
router.use('/notes', noteRoutes);
router.use('/comments', commentRoutes);

module.exports = router;