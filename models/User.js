const {Schema, model} = require('mongoose')

const schema = new Schema({
  fio:{type:String},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  phone:{type:String},
  date:{type:String},
  number:{type:String, required: true},
  passDate:{type:String},
  about:{type: String},
  cod:{type:String},
  numberLicense:{type:String, required: true },
  dateLicense:{type:String}  
})

module.exports = model('User', schema)




