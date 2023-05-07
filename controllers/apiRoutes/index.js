const router = require('express').Router();
// const User = require('../../models');

router.post('/login', async (req, res) => {
  const newUserData = req.body;
  console.log(
    '~ file: index.js:5 ~ router.post ~ newUserData:',
    newUserData
  );
  req.send(201).json({message: 'New User created'});
//   try {
//     const dbUser = await User.create(req.body);
//     const plainUser = dbUser.get({ plain:true});

// console.log('~ file: index.js:9 ~ router.post ~ plainUser');

//     req.session.save(() => {
//       req.session.loggedIn = true;
//       res.status(201).json(plainUser);
//     });
//   } catch(error) {
//     console.log(error);
//   }
});

module.exports = router;
