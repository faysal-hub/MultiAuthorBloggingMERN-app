const express = require('express');
const dotEnv = require('dotenv');

const app = express();

app.get('/', (req,res) =>{
    res.send('server is running!')
})

dotEnv.config({
    path : 'config/config.env'
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, (error)=>{
    if(!error){
        console.log(`server is running in port ${PORT}`);
    }
})


