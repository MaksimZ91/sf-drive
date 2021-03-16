const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const cors = require('cors')

const app = express();
app.use(express.json({ extended: true }))
app.use('/api',cors(), require('./routes/registr.routes') )
app.use('/api',cors(),require('./routes/author.routes'))
app.use('/api',cors(),require('./routes/recov.routes'))

const Startserver = () => {
mongoose.connect(config.get("urlDb"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{console.log("Mongoose contented:true")})
app.listen(config.get("port"), () => {
  console.log("Server listen to port  5000...")
})}

Startserver()


