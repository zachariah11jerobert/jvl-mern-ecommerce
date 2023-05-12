const app = require('./app');
const dotenv = require('dotenv');
dotenv.config({path:"confiig/config.env"});
const connectDatabase = require('./config/database');
const { Server } = require('http');

dotenv.config({path:app.path.join(__dirname,"confiig/config.env")});

connetDatabase();

const servsr = app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port: ${process.env.PORT} in {process.env.NODE_ENV} `)
})

process.on('unhandledRejecttion', (err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhaudlet rejection erroe');
    Server.close(()=>{
        process.exit(i);
    })
})
process.on('uncaughtException',(err)=>{
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhaudlet rejection erroe');
    Server.close(()=>{
        process.exit(i);
    })
})
console.log(a);

