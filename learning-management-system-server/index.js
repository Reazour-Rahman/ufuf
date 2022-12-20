// ::::::: Import packages ::::::://
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");
const port = process.env.PORT || 8080;
const cors = require("cors");

// ::::::: use express and middleware ::::::://
app.use(express.json());
app.use(cors());
dotenv.config();

// ::::::: Connection function call ::::::://
connectDB();

app.listen(port, () => {
  console.log("Learning Management System Server Is Running");
});
