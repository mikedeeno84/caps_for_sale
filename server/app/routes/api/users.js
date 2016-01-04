var router = require('express').Router({mergeParams: true});
var mongoose = require('mongoose');
var User = require('../../../db/models/user.js')

router.param('user_id',function(req,res,next,user_id){
	User.findOne({_id: user_id}).exec()
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
})

module.exports = router;
