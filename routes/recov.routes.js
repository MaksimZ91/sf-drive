const bcrypt = require( 'bcryptjs' );
const { body, validationResult } = require('express-validator');
const { Router } = require('express');
const User = require('../models/User')
const router = Router()

router.post('/recov',
[
  body('email', 'Некорректный email').isEmail(),
  body('password').isLength({ min: 6 })
],
async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(),massge:'Некорректные данные' });
    }
   const {email, password, newPassword}=req.body

   const person = await User.findOne({email})  

   if (!person){
    res.status(400).json({message :'Пользователь c таким email не найден!'})
   }

   if(password==newPassword){
    person.password =  await bcrypt.hash(password, 10)    
    person.save() 
    res.status(201).json({  message:"Ok"})      
   }else{
    res.status(400).json({message:'Введенные пароли не совпадают!'})
   }  
   
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })    
  }
})
module.exports = router