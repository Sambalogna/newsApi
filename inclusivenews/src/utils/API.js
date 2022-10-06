import axios from 'axios';

const search = async (query) => {
    axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2022-10-04&sortBy=popularity&apiKey=fd913d189a4b46a39fa311dfd7df9e0b`)

console.log(search)
}

export default {search}