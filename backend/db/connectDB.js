const mongoose = require("mongoose");

function connectDB(){
    mongoose.set("strictQuery", false); 

    // Set your configuration directly (replace with your actual values)
    const dbConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // ... other options
    };

    mongoose   
        .connect('mongodb://localhost:27017', dbConnectionOptions)
        .then(function () {
            console.log("DB_connected");
        })
        .catch(function (err) {
            console.log("error", err);
        })
}

module.exports = connectDB;
