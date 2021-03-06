const router = require('express').Router()
const Pemasukkan = require('../../models/Pemasukkan')
const User = require('../../models/Account')
const moment = require('moment')
const uuid = require('uuid')



router.post('/tambah/:id_user', (req, res) => {
  User.findOne({
    where: {
      id_user: req.params.id_user
    }
  }).then(result => {
    Pemasukkan.create({
        id_pemasukkan: uuid.v4(),
        id_user: result.id_user,
        pemasukkan: req.body.pemasukkan,
        tanggal: moment().format('YYYY-MM-DD'),
        jam: moment().format('HH:mm:ss')
      })
      .then(data => {
        res.json({
          msg: 'Berhasil tambah pemasukkan',
          data: {
            user: data.id_user,
            pemasukkan: data.pemasukkan,
            tanggal: data.tanggal,
            jam: data.jam
          }
        })
      })
      .catch(err => {
        res.json({
          err
        })
      })
  })
})

//Menampilkan per-tanggal
router.get('/tampil/:id_user', (req, res) => {
  Pemasukkan.findAll({
    attributes: ['tanggal'],
    group: ['tanggal'],
    where: {
      id_user: req.params.id_user
    }
  }).then(tanggal => {
    if (!tanggal) {
      res.json({
        msg: 'Belum ada pemasukkan'
      })
    } else {
      res.json({
        msg: 'Succes',
        tanggal: tanggal
      })
    }
  })
})

//Menampilkan per-pemasukkan berdasarkan hari
router.get('/tampil/:id_user/:tanggal', (req, res) => {
  const tgl = moment(req.params.tanggal)
    .format('YYYY-MM-DD')
    .split(' ')
  console.log(tgl)
  Pemasukkan.findAll({
    where: {
      id_user: req.params.id_user,
      tanggal: tgl[0]
    }
  }).then(hasil => {
    if (!hasil) {
      res.json({
        msg: 'Belum ada pemasukkan'
      })
    } else {
      res.json({
        msg: 'Succes',
        hasil
      })
    }
  })
})

//Tampil jumlah pemasukkan semua
router.get('/tampilsemua/:id_user', (req, res) => {
  Pemasukkan.sum('pemasukkan', {
    where: {
      id_user: req.params.id_user
    }
  }).then(totalPemasukkan => {
    if (!totalPemasukkan) {
      res.json({
        msg: 'Tidak ada pemasukkan'
      })
    } else {
      res.json({
        total: totalPemasukkan
      })
    }
  })
})

router.get('/tampilsemua', (req, res) => {
  Pemasukkan.findAll()
    .then(result => {
      res.json({
        result
      })
    })
    .catch(err => {
      res.json({
        err
      })
    })
})

module.exports = router