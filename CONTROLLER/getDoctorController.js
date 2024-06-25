const farmerLogin = require('../SCHEMAS/farmerLoginSchema');
const path = require('path');
exports.getDoctor = async (req,res)=>{
    try {
        const fp = path.resolve('HTML','doctor.html');
        res.status(200).sendFile(fp);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}
