require('dotenv').config();

const express = require('express');
const githubdata = {	
  
    "login": "maldhan1",
    "id": 131853036,
    "node_id": "U_kgDOB9vq7A",
    "avatar_url": "https://avatars.githubusercontent.com/u/131853036?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/maldhan1",
    "html_url": "https://github.com/maldhan1",
    "followers_url": "https://api.github.com/users/maldhan1/followers",
    "following_url": "https://api.github.com/users/maldhan1/following{/other_user}",
    "gists_url": "https://api.github.com/users/maldhan1/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/maldhan1/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/maldhan1/subscriptions",
    "organizations_url": "https://api.github.com/users/maldhan1/orgs",
    "repos_url": "https://api.github.com/users/maldhan1/repos",
    "events_url": "https://api.github.com/users/maldhan1/events{/privacy}",
    "received_events_url": "https://api.github.com/users/maldhan1/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Maldhan Shamrao Adhav",
    "company": "kennovation software limited",
    "blog": "",
    "location": "pune",
    "email": null,
    "hireable": null,
    "bio": "I am Maldhan, a AWS cloud engineer Engineer from 🇮🇳   passionate about developing production-ready environment  with 4+ years of professional onsite as well ",
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 3,
    "following": 57,
    "created_at": "2023-04-26T07:04:45Z",
    "updated_at": "2024-06-21T09:35:44Z"
  }
  
  
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
app.get('/github', (req, res) => {
  res.json(githubdata);
});


app.get('/login', (req, res) => {
  res.send('<h1> please login at maldhan.com </h1>');
});

// Define 100 love messages
const loveMessages = [
  'You are my sunshine on a cloudy day.',
  'My love for you grows stronger every day.',
  'You make my heart skip a beat.',
  'I am so lucky to have you in my life.',
  'Your smile is my favorite thing in the world.',
  'You are my best friend and soulmate.',
  'I love you more than words can say.',
  'You are my everything.',
  'You complete me.',
  'Forever and always, I love you.',
  'You are the love of my life.',
  'Every moment with you is a treasure.',
  'You make me a better person.',
  'You are my heart’s desire.',
  'My world revolves around you.',
  'You are my dream come true.',
  'I cherish every moment with you.',
  'You make my heart full.',
  'You are my happiness.',
  'You are the reason I smile.',
  'I am grateful for you every day.',
  'You are my one and only.',
  'You are the light in my life.',
  'My heart beats for you.',
  'You are my forever love.',
  'You are my angel.',
  'You are my joy.',
  'You are my safe haven.',
  'You are my heart’s melody.',
  'I adore you.',
  'You are my sunshine.',
  'You are my favorite person.',
  'You are my soulmate.',
  'I fall in love with you every day.',
  'You are my heart’s desire.',
  'You make my dreams come true.',
  'You are my paradise.',
  'You are my everything.',
  'You are the love of my life.',
  'You are my joy.',
  'You are my heart’s wish.',
  'You are my beautiful reality.',
  'You are my reason for living.',
  'You are my heart’s content.',
  'You are my perfect match.',
  'You are my one true love.',
  'I love you more every day.',
  'You are my passion.',
  'You are my happiness.',
  'You are my love and joy.',
  'You are my dream come true.',
  'You are my reason for being.',
  'You are my heart’s peace.',
  'You are my eternal love.',
  'You are my beloved.',
  'You are my heart’s treasure.',
  'You are my sweetest love.',
  'You are my forever friend.',
  'You are my love and light.',
  'You are my precious gem.',
  'You are my joy and delight.',
  'You are my heart’s blessing.',
  'You are my greatest joy.',
  'You are my heart’s delight.',
  'You are my one true soulmate.',
  'You are my everything.',
  'You are my life’s happiness.',
  'You are my heart’s love.',
  'You are my sweetest joy.',
  'You are my dream.',
  'You are my love story.',
  'You are my heart’s wish.',
  'You are my beloved one.',
  'You are my reason for joy.',
  'You are my heart’s desire.',
  'You are my eternal sunshine.',
  'You are my one true love.',
  'You are my love and joy.',
  'You are my everything.',
  'You are my heart’s content.',
  'You are my joy and happiness.',
  'You are my forever love.',
  'You are my precious one.',
  'You are my love and light.',
  'You are my heart’s delight.',
  'You are my dream come true.',
  'You are my eternal love.',
  'You are my forever joy.',
  'You are my heart’s happiness.',
  'You are my precious gem.',
  'You are my greatest love.',
  'You are my heart’s treasure.',
  'You are my dearest love.',
  'You are my joy and peace.',
  'You are my dream.',
  'You are my heart’s light.',
  'You are my one and only.',
  'You are my sweet love.',
  'You are my forever happiness.',
  'You are my heart’s joy.',
  'You are my beloved partner.',
  'You are my one true soulmate.',
  'You are my heart’s delight.',
  'You are my eternal sunshine.',
  'You are my love and my life.',
  'You are my greatest happiness.',
  'You are my everything.',
  'You are my joy and light.',
  'You are my heart’s content.',
  'You are my dearest one.',
  'You are my sweetest joy.',
  'You are my heart’s desire.',
  'You are my forever love.',
  'You are my greatest treasure.',
  'You are my dream come true.',
  'You are my heart’s passion.',
  'You are my one true love.',
  'You are my love and joy.',
  'You are my eternal happiness.',
  'You are my heart’s sunshine.',
  'You are my sweetest love.',
  'You are my joy and peace.',
  'You are my dearest love.',
  'You are my forever happiness.',
  'You are my heart’s light.',
  'You are my dream come true.',
  'You are my beloved.',
  'You are my eternal love.',
  'You are my heart’s happiness.',
  'You are my joy and light.',
  'You are my greatest love.',
  'You are my everything.',
  'You are my heart’s treasure.',
  'You are my sweetest joy.',
  'You are my love and life.',
  'You are my heart’s content.',
  'You are my dream and my joy.',
  'You are my eternal sunshine.',
  'You are my one true love.',
  'You are my beloved.',
  'You are my heart’s light.',
  'You are my greatest happiness.',
  'You are my sweetest love.',
  'You are my joy and peace.',
  'You are my forever love.',
  'You are my heart’s delight.',
  'You are my dream come true.',
  'You are my love and joy.',
  'You are my eternal happiness.',
  'You are my heart’s content.',
  'You are my greatest treasure.',
  'You are my sweet love.',
  'You are my joy and light.',
  'You are my heart’s desire.',
  'You are my one true soulmate.',
  'You are my eternal love.',
  'You are my greatest joy.',
  'You are my sweetest joy.',
  'You are my heart’s happiness.',
  'You are my forever love.'
];

app.get('/love', (req, res) => {
  const buttons = loveMessages.map((message, index) => {
    return `
      <button class="love-button" onclick="showMessage('${message}')">
        Love Message ${index + 1}
      </button>
    `;
  }).join('');

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
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
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
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: background-color 0.3s, transform 0.3s;
          }
          .love-button:hover {
            background-color: #d81b60;
            transform: scale(1.05);
          }
          .love-button:active {
            transform: scale(0.95);
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
          ${buttons}
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
