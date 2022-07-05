const mogoose = require('mongoose');
const adminRecords = mogoose.Schema({
    Name:{type: String},
    Email:{type: String},
    Phone:{type: String},
      Password:{type: String},
      contact:{type: String},
      Id:{type: String},
},
{
timestamps:true
});
module.exports = mogoose.model('Admin_Schema',adminRecords);