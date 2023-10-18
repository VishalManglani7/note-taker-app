const express = require('express');
const app = express();

const routes = require('./routes');

const PORT = process.env.PORT || 3001;

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} `))