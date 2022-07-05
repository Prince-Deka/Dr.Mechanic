const express = require('express');
const router = express.Router();
const RegisterModel = require('../models/registerSchema')
router.post('/register',(req,res)=>{
   const cusObj= new  RegisterModel({
    Name:req.body.Name,
    Email:req.body.Email,
    Phone:req.body.Phone,
    Password:req.body.Password,
   });
   cusObj.save()
   .then(insertdetails => {
    res.status(200).send('DOCUMENT INSERED IN MONGODB DATABASE' + '<br\>' +insertdetails)
   })
   .catch(err=>{
    res.status(500).send({ message: err.message || 'Error in Employee Save ' })
   })
})
module.exports = router;