const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const cors = require('cors')
const bodyParser = require('body-parser');




const app = express();
app.use(express.json({ extended: true }))
app.use('/api',cors(), require('./routes/auth.routes') )

mongoose.connect(config.get("urlDb"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{console.log("Mongoose contented:true")})

app.listen(5000, () => {
  console.log("Server listen to port  5000...")
})


