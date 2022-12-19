import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import studentRoutes from './routes/student.js'

// initialise express
const app = express();
// set up the body parser for sending request
// setting limit of the all json data which cannot be greater than 20mb - extended true makes sute everything goes through the bodyparser false accepts only strings
app.use(bodyParser.json({ limit: "20mb", extended: true }));
// Setup limit for url encoding
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
// setup cross origin resourses
app.use(cors());


// app.use to connect path to our application =>path for student routes and studentRouts
app.use('/students' ,studentRoutes);

//Creation of Database with Atlas MongoDb
//Copy connection String from MongoDb
const CONNECTION_URL =
  "mongodb+srv://al_dov:200Strong@cluster0.ppmx8ld.mongodb.net/?retryWrites=true&w=majority";

//Setup PORT for server
const PORT = process.env.PORT || 5000;

//create mongoose connect function
// add connection string and
// set useNewUrlParser and useUnifiedTopology to true to help avaoid warnings and errors in the console
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // .then()  callback if connection is true which listens to PORT
  .then(() =>
    app.listen(PORT, () => {
      console.log(`<><><><><><><><><><><><>Connection is extablished , running on port ${PORT}<><><><><><><><>`);
    })
  )
  // .catch(if false)
  .catch((error) => {
    console.log(error.message);
  });

//to avoid warnings and start server
mongoose.set("strictQuery", false);


// 