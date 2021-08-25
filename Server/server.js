const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config({ path: "./config/.env" });

const app = express();

app.use(cors());

const sequelize = new Sequelize("angular_project", "root", "Leherpeux1", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connected to mysql database");
} catch (err) {
  console.log(err);
}

app.get("/api", (req, res) => {
  const colorTab = sequelize.define(
    "color",
    {
      idColor: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      colorName: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  colorTab.findAll().then(succes=>res.json(succes));
});

app.listen(process.env.PORT, () => {
  console.log("ok : " + process.env.PORT);
});
