const usersController = require('../controllers/users-controllers');
const express=require('express');
const router=express.Router();
const { check } = require('express-validator');
router.post('/signup',[
    check('name')
      .not()
      .isEmpty(),
    check('email')
      .normalizeEmail()
      .isEmail(),
    check('password').isLength({ min: 6 })
  ],usersController.signup);

router.post('/login', usersController.login);

module.exports = router;
