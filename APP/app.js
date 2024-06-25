const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config({ path: './config.env' });


//ROUTES
const home = require('../ROUTES/gethomeRoutes');
const farmerDashboard = require('../ROUTES/farmerDashboardRoutes');
const updatefarmerCrops = require('../ROUTES/sendfarmerRouter');
const farmerLogin = require('../ROUTES/sendfarmerloginRoutes');
const displayfarmerLogin = require('../ROUTES/getfarmerloginRoutes');
const getLocation = require('../ROUTES/getlocationRouter');
const getproducts = require('../ROUTES/getproductsRoutes');
const displayProfile = require('../ROUTES/displayProfileRoutes');
const getProfile = require('../ROUTES/getprofileRoutes');
const paymentRoutes = require('../ROUTES/paymentRoutes');
const webhookRoutes = require('../ROUTES/webhookRoutes');
const getDoctorRoutes = require('../ROUTES/getDoctorRoutes');
const getFertileRoutes = require('../ROUTES/getFertileRoutes');


//Middleware
app.use(express.static('SCRIPTS'));
app.use(express.static('CSS'));
app.use(express.static('HTML'));
app.use(express.static('SCRIPTS'));
app.use(express.static('IMAGES'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

async function main(){
    try {

        const {mongoose, connect} = require('../CONNECTION/mongoose');
        await connect();
        console.log('Connected to Database');
    
        app.use('/',home);

        app.use('/farmerDashboard',farmerDashboard);

        app.use('/updatefarmer',updatefarmerCrops);

        app.use('/farmerlogin',farmerLogin);

        app.use('/displayfarmerlogin',displayfarmerLogin);

        app.use('/loginsubmit',farmerLogin);

        app.use('/getloc',getLocation);

        app.use('/api/getproducts',getproducts);

        app.use('/displayprofile',displayProfile);

        app.use('/getprofile',getProfile);

        app.use('/getdoctor',getDoctorRoutes);

        app.use('/getfertile',getFertileRoutes);

        app.use('/create-order',paymentRoutes);

        app.use('/webhook',webhookRoutes);
    
    } catch (error) {
        console.log('Error connecting to Database');
    }
}
main();
module.exports = app;