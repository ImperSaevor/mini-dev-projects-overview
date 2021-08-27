const { Sequelize, DataTypes } = require("sequelize");

module.exports = new Sequelize("angular_project", "root", "Leherpeux1", {
  host: "localhost",
  dialect: "mysql",
});
