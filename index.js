const express = require('express');
const app = express();
const port = 3000;

//require routes
const messages = require('./routes/api/v1/messages');

//require log
const logger = require('./middleware/logger');

//json body parser
app.use(express.json());
app.use("/api/v1/messages", messages);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});