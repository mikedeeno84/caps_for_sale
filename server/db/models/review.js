var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Hat = mongoose.model('Hat');
var schema = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
	hat: {type: Schema.Types.ObjectId, ref: 'Hat', required: true},
	rating: {type: Number, min:1, max:5, required: true},
	body: {type: String}
});


//my seeed only runs if I comment this out
schema.pre('save', function (next) {
	var review = this;
	Hat.findOne({_id:review.hat})
		.then(function(hat){
			hat.reviews.push(review)
			return hat.save()
		}).then(next)
  .then(null, console.log)
});

module.exports = mongoose.model("Review", schema);
