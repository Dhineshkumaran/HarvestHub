const mongoose = require('mongoose');
const farmer_plantationSchema = mongoose.Schema({
    id:Number,
    name : String,
    p_name : String,
    imageUrl :  { type: String, default: "https://www.hdwallpapersfreedownload.com/uploads/large/fruits/gorgeous-mix-fresh-fruits-hd.jpg" },
    plant_date : Date,
    maturity_date : Date,
    bit_price : Number
});

const farmer_plantation = mongoose.model('farmer_plantation_details', farmer_plantationSchema);

module.exports = farmer_plantation;