// console.log('routes');
// // WE NEED TO ADD a few lines of code up here!
// // What is this 'friends' object we are referencing below??
//
// module.exports = function(app){
//   app.get('/friends', friends.index);
//   app.get('/friends/:id', friends.show);
//   // app.post('/friends', friends.create);
//   // app.put('/friends/:id', friends.update);
  // app.delete('/friends/:id', friends.delete);
// }
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
var friends= require('../controllers/friends.js');

module.exports = function (myApp) {
  myApp.get('/friends', function(req,res){
    friends.index(req,res);
  })

  myApp.get('/friends/:id', function(req, res){
    friends.show(req,res);
  })

  myApp.put('/friends/:id', function(req,res){
    friends.update(req,res);
  })



myApp.delete('/friends/:id',function(req,res){
  friends.destroy(req,res);
})

myApp.post('/friends', function(req,res){
  console.log(req.body);
  friends.create(req,res);
})
}
