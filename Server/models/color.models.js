const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const ColorChanger = db.define("color",
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

module.exports = ColorChanger;
