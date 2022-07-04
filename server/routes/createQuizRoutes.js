const express=require('express');
 const fileUpload =require('../middlewares/file-upload')
 const {createQuiz} =require('../controllers/createsQuizController')
 const checkAuth=require('../middlewares/check-auth')
 const router=express.Router();
router.use(checkAuth)
router.post('/',fileUpload.single('image'),createQuiz)
// router.patch('/:quizid',updateQuizById)
// router.delete('/:quizid',deleteQuizById)
module.exports = router;