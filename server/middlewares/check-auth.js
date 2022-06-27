const jwt=require('jsonwebtoken')
const HttpError = require("../models/http-error");

module.exports=(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(' ')[1];
        if(!token){
            throw new Error('Authentication Failed!')
        }
        const decodedToken=jwt.verify(token,'abc')
req.userData={userId:decodedToken.userId}
        next();
    } catch (err) {
        const error=new HttpError('Authentication Failed!',401)
        return next(error);
    }


}