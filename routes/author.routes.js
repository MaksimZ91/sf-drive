const bcrypt = require( 'bcryptjs' );
const { body, validationResult } = require('express-validator');
const { Router } = require('express');
const User = require('../models/User')
const config = require('config')
const jwt = require('jsonwebtoken')
const router = Router()




router.post( '/author',
  [
    body('email', 'Некорректный email').isEmail(),
    body('password').exists()
  ],
  async (req, res)  =>{
      try {    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array(),massge:'Некорректные данные' });
        }        
        const {email, password} = req.body
        const person = await User.findOne({email})
         if (!person){
          res.status(400).json({message :'Пользователь c таким email не найден!'})
        }       
        
        const isMatch = await bcrypt.compare(password, person.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Не верная почта или пароль' })
          }

          const accessToken =jwt.sign(
              {name: person.fio, userId:person.id},
              config.get("JwtAccessSecret"),
              { expiresIn: 1200 }
          )
          
          const refreshToken =jwt.sign(
            {},
            config.get("JwtRefreshSecret"),
            { expiresIn: 86400 }
        )

   

          res.json({ accessToken,refreshToken,userId: person.id, message:"Ok" })
       

  } catch (e){
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})


module.exports = router