// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
var mongoose = require('mongoose');
const Schema = mongoose.Schema
var uniqueValidator = require('mongoose-unique-validator');
const UserSchema = new Schema({
  firstname: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
    // unique: true, dropDups: true
  },
  bloodGroup: {
    type: String
  },
  password: {
    type: String,
  },
}, {
  timestamps: true
})

UserSchema.plugin(uniqueValidator);
const Users = mongoose.model('User', UserSchema)
module.exports = Users
