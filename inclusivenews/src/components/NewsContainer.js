import NewsArticle from './NewsArticle';
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import FilterForm from './FilterForm';
import API from '../utils/API';

const NewsContainer = () => {
    const [results, setResults] = useState([]);
    const [excludes, setToExclude] = useState([]);

    //api call
    useEffect(() => {
        const getNews = async () => {
            const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=fd913d189a4b46a39fa311dfd7df9e0b");
            setResults(res.data.articles);
            //console.log(res);
            //console.log(res.data.articles)
        }
        getNews();    
    }, []);

    //filter example
    // let titleArr = results
    // const filterArr = titleArr.filter(news => news.title === "Herschel Walker's Latest Abortion Denial Still Makes No Sense - The Daily Beast")
    // console.log(filterArr)
    // console.log(titleArr)

    //filter function on query 
    const filterSearch = () => 
         API.getNews()
            .then((res) => console.log(res))
            .catch((err)=> console.log(err))

    useEffect(() => {
        filterSearch();
    }, [])
   
    const handleInputChange = (e) => setToExclude(e.target.value)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        filterSearch()

    }

   return (
   <div>
        <FilterForm
            value={excludes}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit} 
        />
        {results.map(({ title, description, url, urlToImage }) => ( 
            <NewsArticle title={title} description={description} url={url} urlToImage={urlToImage} />
        ))}
   </div>
   )
}

export default NewsContainer;