const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  
  dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.productBlesson = require("./product.model.js")(sequelize, Sequelize);
db.categoryBlesson = require("./category.model.js")(sequelize, Sequelize);

module.exports = db;