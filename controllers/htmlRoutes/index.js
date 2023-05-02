const router = require('express').Router();

router.get("/", async (req,res) => {
    res.render('home');
}); 

router.get('/login', async(req, res) => {
    res.render('login');
});

router.get('/register', async(req, res) => {
    res.render('register');
});

router.get('/profile', async(req, res) => {
    res.render('profile');
});


module.exports = router;