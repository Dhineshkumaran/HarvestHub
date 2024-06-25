const path = require('path');
exports.home = (req,res)=>{
    try {
        res.setHeader('Content-Type', 'text/html');
        const fp = path.resolve('HTML','home.html');
        res.status(200).sendFile(fp);
    } catch (error) {
        console.log('Error:',error);
        res.status(200).send('Internal server error');
    }
}