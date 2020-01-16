const router = require('express').Router()
const User = require('../../models/Account')

router.post('/register', (req, res) => {
  User.create({
      username: req.body.username,
      password: req.body.password,
      nama: req.body.nama,
      email: req.body.email
    })
    .then((data) => {
      res.json({
        msg: 'Success create an account',
        data: {
          username: data.username
        }
      }).statusCode(200)
    })
    .catch(() => {
      res.json({
        msg: 'Username or email is not available'
      }).statusCode(403)
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
              username: result.username
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



module.exports = router