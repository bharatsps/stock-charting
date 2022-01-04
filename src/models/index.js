const sequelize = require("../config/db");
const {DataTypes} = require("sequelize");
const models = {}
models.sequelize = sequelize;
models.Forecast = require("../models/Forecast")(sequelize,DataTypes);
models.TB_data = require("../models/TB-data")(sequelize,DataTypes);

module.exports = models;







