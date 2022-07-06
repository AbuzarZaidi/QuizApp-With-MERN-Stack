const express=require('express');
 const fileUpload =require('../middlewares/file-upload')
 const {createQuiz,updateQuizById} =require('../controllers/createsQuizController')
 const checkAuth=require('../middlewares/check-auth')
 const router=express.Router();
// router.use(checkAuth)
router.post('/',fileUpload.single('image'),createQuiz)
 router.patch('/:id',fileUpload.single('image'),updateQuizById)
// router.delete('/:quizid',deleteQuizById)
module.exports = router;