exports.storefarmerplantation = async (req,res)=>{
    try {
        const farmer_plantation = require('../SCHEMAS/farmer_plantation');
        console.log(req.body);
        const {imageUrl,name, p_name, plant_date, maturity_date, bit_price} = req.body;
        const farmer_plantation_data = new farmer_plantation({
            "name" : name,
            "p_name" : p_name,
            "imageUrl" : imageUrl,
            "plant_date" : plant_date,
            "maturity_date" : maturity_date,
            "bit_price" : bit_price
        })
        await farmer_plantation_data.save();
        res.status(200).json("Data saved successfully!");
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send("Error saving to database");
    }
}