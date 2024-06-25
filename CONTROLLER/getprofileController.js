const farmerLogin = require('../SCHEMAS/farmerLoginSchema');
exports.getProfile = async (req,res)=>{
    try {
        const data =await farmerLogin.findOne();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}
