const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
//login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
  module.exports = router;