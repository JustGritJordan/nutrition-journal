const router = require('express').Router();

router.post('/login', async (req,res) => {
   const newUserData = req.body;

   req.session.save(()=>{
    req.session.loggedIn = true;
    res.status(201).json({ message: 'New user created!'});
   });

}); 


// const router = require('express').Router();
// const mealsRoutes = require('./meals')
// const userRoutes = require('./user')

// router.use("/user",userRoutes);
// router.use("/meals", mealsRoutes);

module.exports = router;