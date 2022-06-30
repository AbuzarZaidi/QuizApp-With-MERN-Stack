const express=require('express');
const {readQuiz,readUserQuizes,deleteUserQuizes} =require('../controllers/TakeQuiz')
const router=express.Router();
router.get('/',readQuiz)
router.get('/:uid',readUserQuizes)
router.delete('/:id',deleteUserQuizes)
module.exports = router;