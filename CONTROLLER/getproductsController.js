exports.getproducts = async (req,res)=>{
    try {
        const name = req.query.name;
        const farmer_plantation = require('../SCHEMAS/farmer_plantation');
        if(!name) {          
            const result = await farmer_plantation.find();
            res.status(200).json(result);
        } else {
            const result = await farmer_plantation.find({"p_name":name});
            res.status(200).json(result);
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send("Error retriving from database.");
    }
}