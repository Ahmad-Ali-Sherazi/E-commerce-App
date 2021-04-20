const express = require('express');

const app = express();

require('dotenv/config');

link=process.env.API_URL;
app.get('/', (req, res)=> {
    res.send('Message from API');
})
app.listen(3000, ()=> {
    console.log(link);
})