const mongoose = require("mongoose");
require("dotenv").config({ path: "backend/config/.env" })

function connectDB(){
    mongoose.set("strictQuery", false); 

    // Set your configuration directly (replace with your actual values)
    const dbConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // ... other options
    };

    mongoose   
        .connect(process.env.DB_LINK, dbConnectionOptions)
        .then(function () {
            console.log("DB_connected");
        })
        .catch(function (err) {
            console.log("error", err);
        })
}

module.exports = connectDB;
