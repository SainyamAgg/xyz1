const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    brandName : String,
    brandIconUrl : String,
    links : [
        {
            label : String,
            url : String
        }
    ]
});

const Detail = mongoose.model('Detail', detailSchema);
module.exports = Detail;