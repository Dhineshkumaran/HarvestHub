const path = require('path');
exports.displayLogin = async (req,res)=>{
    try {
        res.setHeader('Content-Type', 'text/html');
        const fp = path.resolve('HTML','login.html');
        res.status(200).sendFile(fp);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}