const User = require('./User');
const Journal = require('./Journal');
const Comment = require('./Comment');
const Image = require('./Image');
const dbConfig = require('../db/db.config.js');


const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.images = require('./Image')(sequelize, Sequelize);


//create associations
User.hasMany(Journal, {foreignKey: 'user_id'});

Journal.belongsTo(User, {foreignKey: 'user_id'});

Comment.belongsTo(User, {foreignKey: 'user_id'});
  
Comment.belongsTo(Journal, {foreignKey: 'post_id'});

User.hasMany(Comment, {foreignKey: 'user_id'});

Journal.hasMany(Comment, {foreignKey: 'post_id'});

Journal.hasMany(Image, {foreignKey: 'user_id'});


module.exports = {User, Journal, Comment};
