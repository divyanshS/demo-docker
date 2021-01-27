const ip = require('ip');
const express = require("express");

const app = express();

machineIp = ip.address();

app.get('/', (req, res) => {
    res.send(`Hi There!<br>-From ${machineIp}`)
});


app.listen(8080, ()=> {
    console.log("Server started..");
    console.log("Go on to http://localhost:8080");
    console.log(`..OR try http://${machineIp}:8080`);
});