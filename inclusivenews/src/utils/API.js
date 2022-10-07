import Axios from 'axios'

const getNews = async () => {
    Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=fd913d189a4b46a39fa311dfd7df9e0b");
    //setResults(res.data.articles);
    //console.log(res);
    //console.log(res.data.articles)
}

export default {getNews}