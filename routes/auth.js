const router = require('express').Router();
const userController = require('../controllers/userController');
const { isPublic, isPrivate } = require('../middlewares/checkAuth');

const { registerValidation, loginValidation } = require('../validators.js');
router.get('/login', isPublic, (req, res) => {
  res.render('login', {
    pageTitle: 'Login',
  });
});

router.get('/register', isPublic, (req, res) => {
  res.render('register', {
    pageTitle: 'Registration',
  });
});

// POST methods for form submissions
router.post('/register', isPublic, registerValidation, userController.registerUser);
router.post('/login', isPublic, loginValidation, userController.loginUser);
router.get('/logout', isPrivate, userController.logoutUser);

module.exports = router;
