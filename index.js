const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors'); // Import the cors middleware
// require config directory
const config = require('config');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOD);

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