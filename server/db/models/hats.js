var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new mongoose.Schema({
	name: {type: String, required: true},
	image: {type: String, required: true},
	occasions: {type: [String]},
	formality: {type: String, enum:["1","2","3","4","5"]},
	reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
})

mongoose.model('Hat', schema)