require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log(`It's working!!! IT'S WORKING!!!!`)
}).catch(() => console.log(`You have a problem at the massive invocation`))



app.listen(SERVER_PORT, () => console.log(`It's over Anakin. I have the ${SERVER_PORT} port`))