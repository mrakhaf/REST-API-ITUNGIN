const Sequelize = require('sequelize')

const sequelize = new Sequelize('heroku_206120838c5fc6c', 'b9ba3d4e0818b5', '927bd3de', {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  dialect: 'mysql',
  logging: console.log
});

// mysql: //b9ba3d4e0818b5:927bd3de@us-cdbr-iron-east-05.cleardb.net/heroku_206120838c5fc6c?reconnect=true

module.exports = sequelize