exports.farmer_login = async (req, res) => {
    const express = require('express');
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    try {
        const farmer_login = require('../SCHEMAS/farmerLoginSchema');
        console.log(req.body);
        const { username, password } = req.body;
        const farmer_plantation_data = new farmer_login({
            "username": username,
            "password":password
        });
        await farmer_plantation_data.save();
        console.log("Data saved successfully");
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send("Error saving to database");
    }
}
