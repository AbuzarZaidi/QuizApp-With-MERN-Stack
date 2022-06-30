const express=require('express');
 const {createQuiz} =require('../controllers/createsQuizController')
 const checkAuth=require('../middlewares/check-auth')
 const router=express.Router();
router.use(checkAuth)
router.post('/',createQuiz)
// router.patch('/:quizid',updateQuizById)
// router.delete('/:quizid',deleteQuizById)
module.exports = router;