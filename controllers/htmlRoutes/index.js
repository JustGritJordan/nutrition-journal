const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/login', async (req, res) => {
  res.render('login');
});

// router.get("/register", async (req, res) => {
//   res.render("register");
// });

module.exports = router;
