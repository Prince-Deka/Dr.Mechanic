const express = require('express');
const app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
let cors = require('cors');
app.use(cors());
const mongoDb = require('./dbconnect.js');
const registration = require('./controllers/register.js');
app.use('/cus',registration);
const login = require('./controllers/logincheck.js');
app.use('/cuslog',login);
const adm = require('./models/adminRecords.js');
app.use('/ad',adm);
app.listen('4000',()=>{
    console.log("The server is running at Port No 4000...")
})