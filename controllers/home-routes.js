const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      res.render('all-posts', {  });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  });

  router.get("/login", (req, res) => {
    res.render('login');
  });

  router.get("/list", async (req, res) => {
    const userData = await User.findAll().catch((err) => {
      res.json(err);
    });
    const users = userData.map((user) => user.get({ plain: true }));
  
    res.json(users);
  });
  
  module.exports = router;