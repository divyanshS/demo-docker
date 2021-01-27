const ip = require('ip');
const express = require("express");
 
const app = express();

port = 8080;
machineIp = ip.address();
localAddress = `http://localhost:${port}`;
machineAddress = `http://${machineIp}:${port}`;

app.get('/', (req, res) => {
    res.send(`Hi There!<br>-From ${machineIp}`)
});


app.listen(8080, ()=> {
    console.log(`Server started on ${machineAddress}`);
    console.log(`..OR try ${localAddress}`);
});