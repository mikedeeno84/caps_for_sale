var router = require('express').Router({mergeParams: true});

var Hat = require('../../../db/models/hats');
router.get('/', function (req, res, next) {
	Hat.find(req.params).exec()
		.then(function(hats){
			res.json(hats);
		}).then(null, next)
});

router.post('/', function(req, res, next){
	var newHat = new Hat(req.body);
	newHat.save().then(function(createdHat){
		res.json(createdHat);
	}).then(null,next)
});

router.get('/:hatId', function(req, res, next){
	Hat.findOne({_id:req.params.hatId}).exec()
		.then(function(foundHat){
			res.json(foundHat)
		}).then(null,next)
})
router.delete('/:hatId', function(req, res, next){
	Hat.remove({_id:req.params.hatId}).exec()
		.then(function(deletedHat){
			res.json(deletedHat);
		})
		.then(null,next)
})

module.exports = router;
