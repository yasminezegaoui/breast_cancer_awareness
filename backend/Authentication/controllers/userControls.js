const express = require('express')
const router = express.Router()
require('dotenv').config()
const User = require("../model/userModel")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secretKey = process.env.secret_key
const getAllUsers = async (req, res)=>{
    try{
    const data = await User.find();
    res.json(data)
}
    catch(err){
        res.status(500).json({ error: err.message })
    }

}
const maxAge = 7 * 24 * 60 * 60
function authToken(id) {
    const token = jwt.sign({ id }, secretKey, { expiresIn: '7d' });
    const refreshToken = jwt.sign({ id }, secretKey, { expiresIn: '20d' }); 
    return { token, refreshToken };
}
const createUser = async (req, res)=>{
    try{
    const newUser = new User(req.body);
    const {token} = authToken(newUser._id);
    console.log(newUser, token)
    res.cookie('jwt', token, { httpOnly:true, maxAge: maxAge*1000})
    await newUser.save();
    res.status(200).json(`${newUser.username} was created!`);
    console.log(`${newUser.username} was created!`);
    
} catch(err){
    const error = errorHandler(err)
    res.status(400).json({ error })
}}

const loginUser = async (req, res)=>{
    try{    
    console.log(req.body)    
    const { email, password } = req.body
    let user;
    class CustomError extends Error {
        constructor(message, code) {
          super(message);
          this.name = 'CustomError';
          this.code = code;
        }
      }
    if(email ==='' && password ===''){
    throw new CustomError('Enter your Email', 408);    
    }
    else if(email ===''){
    throw new CustomError('Enter your Email', 406);

    }
    else{
    user = await User.findOne({ email: email })
    }
    if(!user){
    throw new CustomError('User not found!', 409);
    }else{
    if(password ===''){
    throw new CustomError('Enter your password', 407);
        
    }else{
    const Match = await bcrypt.compare(password, user.password);
    if (!Match) {
    throw new CustomError('Invalid password!', 410);
    }else{
    const {refreshToken} =  authToken(user.id)

    res.status(200).json({ refreshToken });
    console.log(user, refreshToken);
    }}
    }
} catch(err){
    console.log(err);
    const errs = errorHandler(err)
    res.status(400).json({ errs })
}}

const errorHandler = (err)=>{
    //Signup errors
        let Signerrors = { username:'', email:'', password:'' }
        
    //treating all possible signup errors
        if(err.code === 11000){     
        Signerrors.password = "Username or Email already used!"
        console.log(Signerrors); 
        return Signerrors;
        }
        if(err._message==='users validation failed'){
            Object.values(err.errors).forEach(({ properties }) => {
                Signerrors[properties.path]=properties.message;
             });
             console.log(Signerrors);
        return Signerrors;
        }
    //Login errors
        let Logerrors = { email1:'', password1:'' }  
    //treating all possible login errors
        if(err.code === 406){
            Logerrors.email1 = err.message
            console.log(Logerrors);
            return Logerrors;
        }
        if(err.code === 407){
            Logerrors.password1 = err.message
            console.log(Logerrors);
            return Logerrors;
        }
        if(err.code === 410){
            Logerrors.password1 = err.message
            console.log(Logerrors);
            return Logerrors;
        }
        if(err.code === 408){
            Logerrors.email1 = err.message
            Logerrors.password1 = "Enter your password"
            console.log(Logerrors);
            return Logerrors;
        }
        if(err.code === 409){
            Logerrors.email1 = err.message
            console.log(Logerrors);
            return Logerrors;
        }
        
    }
    
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');   
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        next();
      });
    


exports.router = router
exports.createUser = createUser
exports.loginUser = loginUser
exports.getAllUsers = getAllUsers