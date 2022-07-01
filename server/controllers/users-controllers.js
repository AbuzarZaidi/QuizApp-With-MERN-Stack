const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/users");
// router.get("/", (req, res, next) => {
//   res.send("Register");
// });

  
  const signup=async(req, res)=>{
  const { name, email,password } = req.body;
 
  if (!name || !email || !password ) {
    return res.status(422).send({ error: "Please fill the complete form!" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).send({ error: "Email Already Exist!" });
    }
    // } else if (password !== confirmPassword) {
    //   return res.status(422).send({ error: "Passwords not match!" });
    // } 
    else {
     
      const user = new User({
        name,
        email,
        password,
        
      });
      await user.save();
      
      res.status(201).json({ message: "User Created Successfully" });
    }
  } catch (error) {
    console.log(error);
  }
}
const login=async(req, res)=>{
   
    let token;
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ error: "Please fill the complete form!" });
  }
  try {
    const userExist = await User.findOne({ email: email });
if(userExist){
  let isMatch ;
  try {
     isMatch = await bcrypt.compare(password, userExist.password);
  } catch (error) {
    console.log("Error");
  }
  if (!isMatch) {
    res.status(400).json({ error: "Either password or email is invalid!" });
  } else {
    token=await userExist.generateAuthToken();
 
  res.status(200).json({userId:userExist._id,email:userExist.email,token:token})
  }
    //   res.cookie('jwtoken',token,{
    //     expires:new Date(Date.now()+3600),
    //     httpOnly:true,
    // })
  //   res.cookie("jwtoken","Hello world")
  //   res.status(201).json({ message: "User signin" });
  // }
    
    // localStorage.setItem("userData",JSON.stringify({
    //   token:token
    // }))
    // res
    // .cookie("test", token, {
    //    httpOnly: true,
    // })
    // res.cookie('jwtoken',token,{
    //     expires:new Date(Date.now()+3600),
    //     httpOnly:true,
    // })
    
}
else{
    res.status(400).json({ error: "Either password or email is invalid!" });
}
   
  } catch (error) {
    console.log(error);
  }
}
exports.signup = signup;
exports.login = login;
