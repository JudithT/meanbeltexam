
var mongoose = require('mongoose'),
Friend = mongoose.model('Friend');

module.exports ={
  index:function(req,res){
    console.log('Friends index');
    Friend.find({},function(err,data){
      if (err){
        console.log(err);
        res.json(err);
      }else{
        console.log(data)
        res.json(data);
      }
    })

  },
  create:function(req,res){
    console.log('Friends create');
    // console.log('REQ.body' req.body);
    var friend = new Friend({lastname:req.body.lastname, firstname: req.body.firstname, birthday: req.body.birthday });
    console.log(friend);
    friend.save(function(err){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        res.json({sucess:true});
      }
    })
},

show:function(req,res){
  console.log(req.params);
  Friend.findOne({_id: req.params.id}, function(err,data){
    if (err){
      console.log(err);
      res.json(err);
    }else{
      console.log(data);
      res.json(data);
    }
  })
},

update: function(req,res){
  console.log(req.params,req.body);
  Friend.findOne({_id:req.params.id}, function(err,data){
    if (err){
      console.log(err);
      res.json(err);
    }else{
      for(var i in req.body){
        if (req.body[i]!= data[i]){
          data[i] = req.body[i];
        }
      }
      console.log(data);
      data.save(function(err,data){
        if(err){
          console.log(err);
          res.json(err);
        }else{
          console.log(data);
          res.json(data);
        }
      })
    }
  })
},

destroy:function(req,res){
  console.log(req.params.id)
  Friend.findOne({_id: req.params.id}, function(err,data){
    if (err){
      console.log(err);
      res.json(err);
    }else{
      Friend.remove(data,function(err){
        if(err){
          console.log(err);
          res.json(err);
        }else{
          console.log('deleted');
          res.json({sucess:true});
        }
      })
    }
  })
}
}



// / console.log('friends controller');
// // WE NEED TO ADD A FEW lines of code here!
// // How does a controller talk to mongoose and get a model?
// var mongoose = require('mongoose');
//
// var Friend = mongoose.model('Friend')
// // console.log(Friend)
// // Build out the methods in the friendsControllers below
// function FriendsController(){
//   this.index = function(req,res){
//
//     Friend.find({},function(err,friends){
//       if (err){
//         console.log('something went wrong');
//         res.json({err:'something went wrong'})
//       }else{
//         console.log('successfully update');
//         // res.json({err:'successfully update'})
//
//         res.json(friends);//sent friends objects to client side!
//
//       }
//   });
// }
//
//   this.create = function(req,res){
//     //your code here
//     console.log("POST DATA", req.body);
//     var newfriend = new Friend({firstname:req.body.firstname, lastname:req.body.lastname, birthday: req.body.birthday})
//       newfriend.save(function(err,newfriend){
//
//     if(err){
//       console.log('something went wrong');
//       res.json(err)
//
//     } else {
//       console.log('successfully added a friend');
//       // res.json(newfriend)
//
//       // res.redirect('/');
//       res.json(newfriend);
//
//     }
//   });
// }
//
//
//
//   this.update = function(req,res){
//     console.log("POST DATA", req.body);
//     var id = req.params.id;
//     Friend.findOne({_id: id}, function(err,friend){
//       if(err){
//         console.log('something went wrong');
//         res.json(err)
//
//       } else
//       {
//         var updatedFriend = new Friend({firstname:req.body.firstname, lastname:req.body.lastname, birthday: req.body.birthday})
//
//         }
//         friend.save(function(err,updatedFriend){
//           if(err){
//             console.log(err);
//           }else{
//             res.json(updatedFriends);
//           }
//         })
//     })
//   };
//
//
//   this.delete = function(req,res){
//     var id = req.params.id;
//     Friend.remove({_id:id},function(err){
//     if (err){
//       console.log(err);
//       res.json(err)
//
//     } else{
//
//       res.json({Message:'Friend deleted'});
//
//     }
//   })
// };
//
//   this.show = function(req,res){
//     var id = req.params.id;
//     Friend.findOne({_id:id}, function(err,friends){
//
//     if(err){
//     console.log('something went wrong');
//     res.json(err)
//     }else{
//       console.log("successfully showing");
//       res.json(friends);
//   }
//
// });
//
// }
//
// }
//
//
// module.exports = new FriendsController(); // what does this export?
