import NewsArticle from './NewsArticle';
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import FilterForm from './FilterForm';
import API from '../utils/API';

const NewsContainer = () => {
    const [results, setResults] = useState([]);
    //takes query from Exclude: and sets the exclude keyword
    const [exclude, setToExclude] = useState([]);

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

    
   

    //filter function on exclude query 
    const filterSearch = (query) => {
        let resultsArr = results
        //console.log(resultsArr)
        //console.log(results)
        //analyzes each title for query
        let takeOutNews = '';
        resultsArr.forEach(element => {
            //console.log(element.title)
            let titleStr = element.title.toLowerCase();
            if(titleStr.includes(query)){
                console.log('taking out: ' + titleStr)
                //console.log(titleStr)
                takeOutNews +=titleStr
            }
           //console.log(filteredStr)
        })
        //console.log(takeOutNews)
        //put all not query into filteredArr
        const filteredArr = resultsArr
            .filter(news => news.title.toLowerCase() != takeOutNews)
        //console.log(filteredArr)
       
        
        setResults(filteredArr)
       
    }
     
    useEffect(() => {
        filterSearch('');
    }, [])
   
    const handleInputChange = (e) => setToExclude(e.target.value)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        filterSearch(exclude)

    }

   return (
   <div>
        <FilterForm
            value={exclude}
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