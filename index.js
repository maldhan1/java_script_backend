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

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('maldhan.com');
});

app.get('/youtube', (req, res) => {
  res.send('<h2>maldhan linux to devops</h2>');
});
app.get('/github', (req, res) => {
  res.json(githubdata);
});


app.get('/login', (req, res) => {
  res.send('<h1>Please login at maldhan.com</h1>');
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

// Impressive webpage route
app.get('/impressive', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Impressive Webpage</title>
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
            color: #ff6600;
            font-size: 3em;
            margin-bottom: 20px;
          }
          p {
            font-size: 1.2em;
            line-height: 1.6;
            margin-bottom: 30px;
          }
          .impressive-box {
            background-color: #ffffff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
          }
          .impressive-box img {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
          }
          .impressive-button {
            background-color: #ff6600;
            color: white;
            padding: 12px 24px;
            font-size: 1.2em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .impressive-button:hover {
            background-color: #e65c00;
          }
          @keyframes pulse {
            0% {
              transform: scale(0.9);
            }
            50% {
              transform: scale(1);
            }
            100% {
              transform: scale(0.9);
            }
          }
          .impressive-image {
            animation: pulse 2s infinite;
          }
        </style>
      </head>
      <body>
        <div class="impressive-box">
          <h1>Welcome to the Impressive Webpage!</h1>
          <p>Explore something truly amazing...</p>
          <img class="impressive-image" src="https://via.placeholder.com/600x300" alt="Impressive Image">
          <p>This is where you can find entertainment like never before!</p>
          <a href="https://www.example.com" class="impressive-button">Visit the Impressive Website</a>
        </div>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
