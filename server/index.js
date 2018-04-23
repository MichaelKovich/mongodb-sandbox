require('dotenv').config();

const app = require('express')(),
  {json} = require('body-parser'),
  {CONNECTION_STRING, PORT = 3001} = process.env,
  mongoose = require('mongoose'),
  routes = require('./routes');

app.use(json());

mongoose
  .connect(CONNECTION_STRING)
  .then(() => console.log('Connected to Database.'))
  .catch(err => console.log('Connection Failed. Error: ', err));

routes(app);

app.listen(PORT, console.log(`Dr. Crane is listening on port: ${PORT}`));
