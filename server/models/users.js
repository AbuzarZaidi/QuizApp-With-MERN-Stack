const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const uniqueValidator=require('mongoose-unique-validator')
const jwt=require('jsonwebtoken')
const { Schema } = mongoose;
const usersSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,minlength:6},
    tokens:[{token:{type:String,required:true}}]
})
usersSchema.plugin(uniqueValidator);

usersSchema.pre('save',async function(next){
if(this.isModified('password')){
    this.password=await bcrypt.hash(this.password,12)
    // this.confirmPassword=await bcrypt.hash(this.confirmPassword,12)
}
next();
})

usersSchema.methods.generateAuthToken=async function(next){
try {
    let token=jwt.sign({_id:this._id},"abc",{expiresIn:'1h'});
  
    this.tokens=this.tokens.concat({token:token})
    await this.save();
    return token;
    next();
} catch (error) {
    console.log(error)
}
}
const User = mongoose.model('users', usersSchema );
module.exports=User;