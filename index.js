const express = require('express')
const app = express()
const sequelize = require('./config/db')
const bp = require('body-parser')
const PORT = process.env.PORT || 7000

app.use(bp.json())
app.use(
  bp.urlencoded({
    extended: false
  })
)

app.get('/', (req, res) => {
  res.send('Welcome to Itungin APP')
})

app.use('/api/user', require('./routes/api/userRoutes'))
app.use('/api/pemasukkan', require('./routes/api/pemasukkanRoutes'))

//Test connection sequelize
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

sequelize.sync({
  force: false,
  logging: false
}).then(() => {
  console.log("Table has been created")
}).catch(err => {
  console.log(err)
})

app.listen(PORT, () => console.log(`Server running on localhost ${PORT}`))