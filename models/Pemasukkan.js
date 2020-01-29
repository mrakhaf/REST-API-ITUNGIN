const sequelize = require('../config/db')
const Sequelize = require('sequelize')


const Pemasukkan = sequelize.define('datapemasukkan', {
  id_pemasukkan: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  id_user: {
    type: Sequelize.UUID,
    allowNull: false
  },
  pemasukkan: {
    type: Sequelize.INTEGER,
    allowNull: false
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