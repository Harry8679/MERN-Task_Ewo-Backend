const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
console.log(process.env.PORT);

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
});