const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connet(process.env.DB_LOCAL_URL,{
        useNewUrIParser:true,
        useUnifiedTopoligy:true
    }).then(con=>{
        console.log(`monoDB is connected to the host: ${con.cnnetion.host}`)
})
}
module.exports = connectDatabase;