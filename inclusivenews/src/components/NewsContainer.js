import NewsArticle from './NewsArticle'
import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const NewsContainer = () => {
    const [result, setResult] = useState([]);
    useEffect(() => {
        //a simple api call
        const getNews = async () => {
            const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=fd913d189a4b46a39fa311dfd7df9e0b");
            setResult(res.data.articles);
            console.log(res);
        }
        getNews();    
    }, []);

   return (
   <div>
        {result.map(({title, description, url, urlToImage}) => {
            <NewsArticle title={title} description={description} url={url} urlToImage={urlToImage} />
        })}
   </div>
   )
}

export default NewsContainer;