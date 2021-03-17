const { Router } = require('express');
const auth = require('../middleware/autn.middel')
const router = Router()



router.get( '/test', auth, async (req, res) => {
  res.status(200).json({message:"тест да"})
  
})

module.exports = router