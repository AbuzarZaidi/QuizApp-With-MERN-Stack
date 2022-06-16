const express=require('express');
const {readQuiz} =require('../controllers/TakeQuiz')
const router=express.Router();
router.get('/',readQuiz)
module.exports = router;