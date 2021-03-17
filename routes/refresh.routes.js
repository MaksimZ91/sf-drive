const { Router } = require('express');
const User = require('../models/User')
const config = require('config')
const jwt = require('jsonwebtoken')
const router = Router()


router.post('/refresh'), async (req,res) =>{  
  try{
  const {refreshToken}=req.body
  console.log(req.body)
  const data = jwt.verify(refreshToken, config.get("JwtRefreshSecret"))
  if(!data){
    res.status(404).json({message:"Токин не валиден!"})}
    const person= await User.findOne({refreshToken})

    const neWaccessToken =jwt.sign(
      {name: person.fio, userId:person.id},
      config.get("JwtAccessSecret"),
      { expiresIn: 1200 })
  
  const neWrefreshToken =jwt.sign(
    {},
    config.get("JwtRefreshSecret"),
    { expiresIn: 86400 })

    person.token=neWrefreshToken

    person.save()
    res.json({neWaccessToken, neWrefreshToken, Id:person.id })

  }catch(e){

  }
  res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
}



module.exports = router