'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
  sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User=require('./users')(sequelize,Sequelize);
db.TestMember=require('./testmember')(sequelize,Sequelize);
db.Menu=require('./menu')(sequelize,Sequelize);
db.Board=require('./board')(sequelize,Sequelize);
db.Group=require('./group')(sequelize,Sequelize);
db.Payment=require('./payment')(sequelize,Sequelize);

module.exports = db;
