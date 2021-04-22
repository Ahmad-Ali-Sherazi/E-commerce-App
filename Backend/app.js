const express = require('express');

const app = express();

require('dotenv/config');
const mongoose= require('mongoose');
const link=process.env.API_URL;
const DB=process.env.DB_CONNECTION;

app.get(link+'app', (req, res)=> {
    res.send('Message from API');
})

mongoose.connect(DB, {
    useNewUrlParser:true,
    useUnifiedToplogy:true,
    dbName:'Eshop'
})
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>{
    console.log(err);
})
app.listen(3000, ()=> {
    console.log(link+'app');
})