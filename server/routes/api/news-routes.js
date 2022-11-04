const router = require(".");
const Axios = require('axios')

const getNews = async () => {
  
    const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=fd913d189a4b46a39fa311dfd7df9e0b");
    console.log(res);
    //console.log(res.data.articles)
    return res.data.articles
}




router.route('/').get(getNews());