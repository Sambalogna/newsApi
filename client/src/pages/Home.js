import React, { useEffect } from 'react';
import NewsList from '../components/NewsList'
//import the useQuery Hook from apollo/client to return our data
//import {useQuery} from '@apollo/client';
//import the query into the component where we want the data to be displayed
import api from '../utils/api'

const Home = () => {
    //useQuery Hook to execute the query when the page renders
    //the return object will contain both loading and data properties:
    //const { loading, data } = useQuery()

    useEffect(()=> {
        api.newsFeed().then((data)=> {
            console.log(data)
        })

    }, [])

    return (
        <main>
            <div className="flex-row justify-center"> 
                <div className='col-12 col-md-10 my-3'>
                    <p>hello world</p>
                </div>
            </div>
        </main>
    )
}
export default Home;
