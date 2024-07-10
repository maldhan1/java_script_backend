require('dotenv').config()

/*console.log(process.env) // remove this after you've confirmed it is working */

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
  res.send('maldhan.com')
})

app.get('/youtube', (req,res) => {
  res.send('<h2> maldhan linux to devops</h2>')
})

app.get('/login', (req,res) => {
  res.send('<h1> please login at maldhan.com </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


/* app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/