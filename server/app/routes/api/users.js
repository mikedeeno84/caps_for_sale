var router = require('express').Router({mergeParams: true});
var mongoose = require('mongoose');
var User = require('../../../db/models/user.js')

router.param('user_id',function(req,res,next,user_id){
	User.findOne({_id: user_id})
	.populate('coveted')
	.populate('owned')
	.exec()
	.then(function(user){
		req.user = user;
		next();
	},next);
});

router.get('/',function(req,res,next){
	User.find({}).exec()
	.then(function(users){
		res.status(200).json(users)
	})
})

router.get('/:user_id',function(req,res,next){
	if(req.user){
		res.status(200).json(req.user)
	}else{
		res.send("User Not Found");
	}
});

router.put('/', function(req, res, next) {
  console.log(req.body.user.email);
  if (req.body.type === 'covet') {
    res.json(req.body.user.email);
    User.findOne({email : req.body.user.email}).exec()
    .then(function(user){
      user.coveted.push(req.body.hat);
      return user.save();
    }).then(function(user){
      res.json(user);
    })
  }

  if (req.body.type ===  'owned') {
    res.json(req.body.user.email);
    User.findOne({email : req.body.user.email}).exec()
      .then(function(user){
        user.owned.push(req.body.hat);
        return user.save();
      }).then(function(user){
      res.json(user);
    })
  }
});

module.exports = router;
