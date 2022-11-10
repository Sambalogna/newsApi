const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const Axios = require('axios')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const getNews = async () => {
  
  const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=fd913d189a4b46a39fa311dfd7df9e0b");
  //console.log(res);
  //console.log(res.data.articles)
  return res.data.articles
}

app.get('/api/newsfeed', (req, res) => {
  getNews()
      .then((news) => {
          console.log(news)
          res.json(news)
      });
})

//app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});