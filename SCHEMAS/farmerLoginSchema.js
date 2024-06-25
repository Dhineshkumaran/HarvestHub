const mongoose = require('mongoose');
const farmerLoginSchema = mongoose.Schema({
    username : String,
    password : String
});

const farmerLogin = mongoose.model('farmer_logins', farmerLoginSchema);

module.exports = farmerLogin;