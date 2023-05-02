const router = require('express').Router();
const { Meals } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newMeals = await Meals.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMeals);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Meals.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) =>{
  try { const userMeals = await Meals.findAll()
    console.log(userMeals);
    res.render("dashboard",{title:"meals", userMeals,user:req.session.user})
  } catch (error) {
    res.status(400).json(error);
  }
})

module.exports = router;
