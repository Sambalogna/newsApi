import NewsArticle from './NewsArticle';
import React, {useState, useEffect} from 'react'
import Axios from 'axios'

const NewsContainer = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        //a simple api call
        const getNews = async () => {
            const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=fd913d189a4b46a39fa311dfd7df9e0b");
            setResults(res.data.articles);
            //console.log(res);
            //console.log(res.data.articles)
        }
        getNews();    
    }, []);

    let titleArr = results
    const filterArr = titleArr.filter(news => news.title === "Herschel Walker's Latest Abortion Denial Still Makes No Sense - The Daily Beast")
    console.log(filterArr)
    console.log(titleArr)


   return (
   <div>

        {results.map(({ title, description, url, urlToImage }) => (
            
            <NewsArticle title={title} description={description} url={url} urlToImage={urlToImage} />
        ))}
   </div>
   )
}

export default NewsContainer;