const router = require('express').Router();
const mealsRoutes = require('./meals')
const userRoutes = require('./user')

router.use("/user",userRoutes);
router.use("/meals", mealsRoutes);

module.exports = router;