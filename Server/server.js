const express = require("express");
const cors = require("cors");

const db = require('./config/db');
require("dotenv").config({ path: "./config/.env" });

const beginnerRoutes = require('./routes/beginner.routes');

const app = express();

try {
  db.authenticate();
  console.log("Connected to mysql database");
} catch (err) {
  console.log(err);
};

app.use(cors());

//routes
app.use('/api/beginner', beginnerRoutes);

//server
app.listen(process.env.PORT, () => {
  console.log("ok : " + process.env.PORT);
});
