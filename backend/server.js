const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error)=>{
    if(!error){
        console.log(`server is running in port ${PORT}`);
    }
})


