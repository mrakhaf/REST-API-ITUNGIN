const sequelize = require('../config/db')
const Sequelize = require('sequelize')

const User = sequelize.define('akun', {
  id_user: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  nama: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = User