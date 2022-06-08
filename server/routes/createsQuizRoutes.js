const express=require('express');
 const {createQuiz} =require('../controllers/createsQuizController')
 const router=express.Router();
router.post('/',createQuiz)
// router.patch('/:quizid',updateQuizById)
// router.delete('/:quizid',deleteQuizById)
module.exports = router;