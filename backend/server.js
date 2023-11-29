const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/connectDB")
const cloudinary = require("cloudinary");

// Handling Uncaught Execption => anything not defind Uncaught Execption 

process.on("uncaughtException" , (err) =>{
    console.log(`Error , ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
})


//config =>
 dotenv.config({path : "backend/config/config.env"})
// Connect With MongoDB
connectDB();


// conncet with cloudinary

cloudinary.config({
  cloud_name: 'dbdfhayzl',
  api_key: '592552495729622',
  api_secret: 'MofgTeYy0qpWS2uRYowWzhZuERQ',
});
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${5000}`);
});

// Unhandled Promise Rejection  => server issue
process.on("unhandledRejection" , (err) =>{ 
    console.log(`Error : ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
// if there any issue occures eg : broken host link eg : then return msg and server will close
server.close(() =>{
    process.exit(1);
})
    
})