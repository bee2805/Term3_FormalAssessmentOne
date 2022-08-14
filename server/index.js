const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(routes);

mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if(err){
        console.log("NOT CONNECTED");
    } else{
        console.log("Mongo DB Atlas connection Established");
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log(`Server started on Port: ${PORT}`)});