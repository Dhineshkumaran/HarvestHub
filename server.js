const app = require('./APP/app');
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server has started');
});