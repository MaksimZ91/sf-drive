const { Router } = require('express');
const User = require('../models/User')
const config = require('config')
const jwt = require('jsonwebtoken')
const router = Router()

router.post('/refresh', async (req,res) =>{ 
  try{
  const {refToken}=req.body 
  const data = jwt.verify(refToken, config.get("JwtRefreshSecret"))
    if(!data){
    res.status(404).json({message:"Токин не валиден!"})}
    const person= await User.findOne({refToken})

    const accessToken =jwt.sign(
      {name: person.fio, userId:person.id},
      config.get("JwtAccessSecret"),
      { expiresIn: config.get("ACCESS_TOKEN_LIFE")})
  
  const refreshToken =jwt.sign(
    {},
    config.get("JwtRefreshSecret"),
    { expiresIn: config.get("REFRESH_TOKEN_LIFE")})

    person.refToken=refreshToken
    
    person.save()

    res.json({accessToken, refreshToken, userId:person.id })

  }catch(e){
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }

})



module.exports = router