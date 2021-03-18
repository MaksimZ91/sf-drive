const jwt = require('jsonwebtoken')
const config = require('config')

module.exports =  (req, res, next)  =>  {
  
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    

    const token = req.headers.authorization.split(' ')[1]
  

    if (!token) {
      return res.status(401).json({ message: 'Нет авторизации' })
    }

    jwt.verify(token, config.get('JwtAccessSecret'), {}, (error, payload)=>{
      if (error){
        return res.staus(403).json({meassge:error})
      }
      req.payload=payload
      next()
    })

  } catch (e) {
    res.status(500).json({ message: 'Ошибка  доступа!' })
  }
}
