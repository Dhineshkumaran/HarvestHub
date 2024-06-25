const path = require('path');
exports.getFertile = async (req,res)=>{
    try {
        const fp = path.resolve('HTML','fertile.html');
        res.status(200).sendFile(fp);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}
