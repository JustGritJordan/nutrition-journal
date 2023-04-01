const router = require('express').Router();


router.post('/register?', async (req,res) => {
    const newUserData = req.body;
    console.log(newUserData);
    res.send(201).json({message: 'New User Created'});
});




// const mealsRoutes = require('./meals')
// const userRoutes = require('./user')

// router.use("/user",userRoutes);
// router.use("/meals", mealsRoutes);

module.exports = router;