const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const User = sequelize.define('akun', {
  id_user: {
    type: Sequelize.TEXT('tiny'),
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  nama: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = User