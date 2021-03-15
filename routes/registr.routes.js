const bcrypt = require( 'bcryptjs' );
const { body, validationResult } = require('express-validator');
const { Router } = require('express');
const User = require('../models/User')
const router = Router()


router.post( '/registr',
  [
    body('email', 'Некорректный email').isEmail(),
    body('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
  ],
  async (req, res)  =>{
  try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array(),massge:'Некорректный данные при регистрации' });
        }
        const {email, password} = req.body
        const person = await User.findOne({email})
        if (person){
          res.status(400).json({message :'Пользователь с таким email уже сшествует'})
        }
        const hashPassword = await bcrypt.hash(password, 10)      
        const user = new User ({...req.body, password:hashPassword})
      
        user.save()
        res.status(201).json({message:"Ok"})

  } catch (e){
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


module.exports = router