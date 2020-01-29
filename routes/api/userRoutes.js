const router = require('express').Router()
const User = require('../../models/Account')
const uuid = require('uuid')


router.post('/register', (req, res) => {
  User.create({
      id_user: uuid.v4(),
      username: req.body.username,
      password: req.body.password,
      nama: req.body.nama,
      email: req.body.email
    })
    .then((data) => {
      res.status(200).json({
        msg: 'Success create an account',
        data: {
          username: data.username,
          id_user: data.id_user
        }
      })
    })
    .catch(err => {
      res.status(403).json({
        err
      })
    })
})

router.post('/login', (req, res) => {
  User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(result => {
      if (!result) {
        res.json({
          msg: 'username not found'
        })
      } else {
        if (result.password == req.body.password) {
          res.json({
            msg: 'Succes Login',
            data: {
              id_user: result.id_user
            }
          })
        } else {
          res.json({
            msg: 'Incorrect username or password'
          })
        }
      }
    })
    .catch((err) => {
      res.json(err)
    })
})

router.get('/akun', (req, res) => {
  User.findAll()
    .then(result => {
      res.json({
        result
      })
    })
    .catch(err => {
      res.json(err)
    })
})


module.exports = router