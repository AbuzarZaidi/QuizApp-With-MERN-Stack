const express=require('express');
const {readQuiz,readUserQuizes} =require('../controllers/TakeQuiz')
const router=express.Router();
router.get('/',readQuiz)
router.get('/:uid',readUserQuizes)
module.exports = router;