const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sliderSchema = new Schema({
    title : String,
    subTitle : String,
    imageUrl : String,
    class : String
});

const Slider = mongoose.model('Slider', sliderSchema);
module.exports = Slider;