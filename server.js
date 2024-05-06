const express = require("express");
const app = express();

const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const taskRouter = require("./routes/task.route");
dotenv.config();

app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

const port = process.env.PORT;
// console.log(process.env.PORT);

app.use(("/api/v1/tasks", taskRouter));



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
