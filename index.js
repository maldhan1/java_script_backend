require('dotenv').config()

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

app.get('/love', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Love for My Wife</title>
      </head>
      <body>
        <h1>I love you, Vaishnavi!</h1>
        <p>You are the light of my life and my best friend. Every day with you is a beautiful adventure, and I am so grateful to have you by my side. I cherish every moment we spend together and look forward to creating many more wonderful memories. I love you more than words can express.</p>
      </body>
    </html>
  `)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

/* app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/



/* require('dotenv').config()

console.log(process.env) // remove this after you've confirmed it is working 

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


 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
*/