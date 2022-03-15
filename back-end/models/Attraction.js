var mongoose = require('mongoose');

var AttractionSchema = new mongoose.Schema({
    name: String,
    image: String,
    restrictions: [{ height: String, other: String }],
    price: String,
    desc: String
});

module.exports = mongoose.model('Attraction', AttractionSchema);