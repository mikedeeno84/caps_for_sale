var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
	hat: {type: Schema.Types.ObjectId, ref: 'Hat', required: true},
	rating: {type: Number, min:1, max:5, required: true},
	body: {type: String}
});

module.exports = mongoose.model("Review", schema);
