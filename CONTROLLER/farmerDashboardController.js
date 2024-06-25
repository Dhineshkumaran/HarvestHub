const path = require('path');
exports.getfarmerDashboard = async (req,res)=>{
    try {
        res.setHeader('Content-Type', 'text/html');
        const fp = path.resolve('HTML','farmerhome.html');
        res.status(200).sendFile(fp);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}