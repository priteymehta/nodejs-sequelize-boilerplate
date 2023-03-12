'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.json')[env];
const db = {};



// Initialize the sequelize object
let sequelize = new Sequelize({
  host: config.host,
  username: config.username,
  password: config.password,
  port: config.port,
  database: config.database,
  dialect: config.dialect,
});


// database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully!!");
  })
  .catch((err) => {
    console.log("Error while connecting dataabase ==>>>>" , err);
  });


// model associations
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
