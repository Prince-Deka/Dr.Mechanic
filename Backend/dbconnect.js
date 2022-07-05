const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Record';
mongoose.connect(url).then(()=>{
  console.log('Node-Js to MongoDb connection Established');
}).catch((err)=>{
  console.log('Error in connect the server'+json.stringify(err,undefined,2));
  prcess.exit();
})
module.exports = mongoose;