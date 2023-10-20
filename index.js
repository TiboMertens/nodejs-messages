const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); // Import the cors middleware
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/labo4');

//require routes
const messages = require('./routes/api/v1/messages');

//require log
const logger = require('./middleware/logger');

//json body parser
app.use(express.json());
app.use(cors()); // Use the cors middleware
app.use("/api/v1/messages", messages);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});