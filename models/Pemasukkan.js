const sequelize = require('../config/db')
const Sequelize = require('sequelize')


const Pemasukkan = sequelize.define('datapemasukkan', {
  id_pemasukkan: {
    type: Sequelize.INTEGER,
    autoIncreament: true,
    primaryKey: true
  },
  id_user: {
    type: Sequelize.INTEGER
  },
  pemasukkan: {
    type: Sequelize.INTEGER,
    notNull: true
  },
  tanggal: {
    type: Sequelize.DATEONLY
  },
  jam: {
    type: Sequelize.TIME
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = Pemasukkan