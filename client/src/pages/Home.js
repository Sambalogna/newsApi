import React, { useEffect, useState } from 'react';

//import the useQuery Hook from apollo/client to return our data
//import {useQuery} from '@apollo/client';
//import the query into the component where we want the data to be displayed
import api from '../utils/api'
import NewsList from '../components/NewsList/index'
import FilterForm from '../components/FilterForm';
const Home = () => {
    //useQuery Hook to execute the query when the page renders
    //the return object will contain both loading and data properties:
    //const { loading, data } = useQuery()
    const [results, setResults] = useState([]);
    const [exclude, setToExclude] = useState([]);
    //fetch News feed and set result
    useEffect(()=> {
        api.newsFeed().then((data)=> {
            //console.log(data)
            setResults(data)
        })
    }, [])

    //set filterSearch to empty string -- no exclusions
    useEffect(() => {
        filterSearch('');
    }, [])
    
    //handle value of input and change state of exclude
    const handleInputChange = (e) => setToExclude(e.target.value)

    //prevent default and handle filter function initialization
    const handleFormSubmit = (e) => {
        e.preventDefault();
        filterSearch(exclude)
    }

    //Filter function on exclude query
    //TODO: create factory function that inputs array to continuously filter multiple instances 
    //currently breaks on double instance of exclusion
    const filterSearch = (query) => {
        let resultsArr = results
        //console.log(resultsArr)
        //console.log(results)
        //analyzes each title for query
        let takeOutNews = [];
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

    return (
        <main>
            <div className="flex-row justify-center"> 
                <div className='col-12 col-md-10 my-3'>
                    <FilterForm
                    value={exclude}
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit} 
                    />
                    {/* {console.log(results)} */}
                    {results?.map(({ title, description, url, urlToImage }) => ( 
                    <NewsList key={title} title={title} description={description} url={url} urlToImage={urlToImage} />
                    ))}
                </div>
            </div>
        </main>
    )
}
export default Home;
