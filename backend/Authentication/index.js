const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const router = require('./routes/Routers')
app.use(express.json())
const port = process.env.PORT
app.use(cors())

const db_URL = process.env.DB_URL;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    next();
    
     });

app.use('/auth', router)

mongoose
    .connect(db_URL, { dbName: "Posts" })
    .then(()=>{
        console.log("Connected to MongoDB");
        app.listen(port,()=>{
            console.log(`Server running on port ${port}`)
        });
    })
    .catch((err)=>console.log(err)
    );