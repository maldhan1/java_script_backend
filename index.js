require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('maldhan.com');
});

app.get('/youtube', (req, res) => {
  res.send('<h2> maldhan linux to devops</h2>');
});

app.get('/login', (req, res) => {
  res.send('<h1> please login at maldhan.com </h1>');
});

app.get('/love', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Love for My Wife</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f2f5;
            color: #333;
            text-align: center;
            margin: 0;
            padding: 50px;
          }
          h1 {
            color: #e91e63;
          }
          p {
            font-size: 1.2em;
            line-height: 1.6;
          }
          .button-container {
            margin-top: 20px;
          }
          .love-button {
            background-color: #e91e63;
            border: none;
            color: white;
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            font-size: 1em;
            border-radius: 5px;
          }
          .love-button:hover {
            background-color: #d81b60;
          }
        </style>
        <script>
          function showMessage(message) {
            alert(message);
          }
        </script>
      </head>
      <body>
        <h1>I love you, Vaishnavi!</h1>
        <p>You are the light of my life and my best friend. Every day with you is a beautiful adventure, and I am so grateful to have you by my side. I cherish every moment we spend together and look forward to creating many more wonderful memories. I love you more than words can express.</p>
        <div class="button-container">
          <button class="love-button" onclick="showMessage('You are my sunshine on a cloudy day.')">Love Message 1</button>
          <button class="love-button" onclick="showMessage('My love for you grows stronger every day.')">Love Message 2</button>
          <button class="love-button" onclick="showMessage('You make my heart skip a beat.')">Love Message 3</button>
          <button class="love-button" onclick="showMessage('I am so lucky to have you in my life.')">Love Message 4</button>
          <button class="love-button" onclick="showMessage('Your smile is my favorite thing in the world.')">Love Message 5</button>
          <button class="love-button" onclick="showMessage('You are my best friend and soulmate.')">Love Message 6</button>
          <button class="love-button" onclick="showMessage('I love you more than words can say.')">Love Message 7</button>
          <button class="love-button" onclick="showMessage('You are my everything.')">Love Message 8</button>
          <button class="love-button" onclick="showMessage('You complete me.')">Love Message 9</button>
          <button class="love-button" onclick="showMessage('Forever and always, I love you.')">Love Message 10</button>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
