const express = require('express'); // here we have imported export using require which is the keyword for import in node js which uses commonjs keywords.

 
// creates express app by allowing us to call function for the app 
const app = express() ;

app.get('/',(req, res) => {
    res.json({mssg : 'Welcome to the app'})
})
// listens for requests on a port and runs the function given 
app.listen(4000,() => {
    console.log("Successfully listening on port 4000!!")
})