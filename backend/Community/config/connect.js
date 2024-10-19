const mongoose = require("mongoose");
require('dotenv').config()
const db_url = process.env.DB_URL
async function connectToDB(){
mongoose.connect(db_url, {
    dbName:"Posts",
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));
}

module.exports = connectToDB;