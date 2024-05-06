const express = require("express");
const app = express();

const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
dotenv.config();

const port = process.env.PORT;
// console.log(process.env.PORT);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running on the port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
