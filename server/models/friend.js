console.log('friends model');
var mongoose = require('mongoose');
var FriendSchema = new mongoose.Schema({
  firstname: {type:String, required:true},
  lastname: {type:String,  required:true},
  birthday:{type:Date, required:true}
},{timestamps:true});

var Friend = mongoose.model('Friend',FriendSchema)
// console.log(Friend)
// build your friend schema and add it to the mongoose.models
