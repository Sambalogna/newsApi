import React from 'react';
import NewsList from '../components/NewsList'
//import the useQuery Hook from apollo/client to return our data
import {useQuery} from '@apollo/client';
//import the query into the component where we want the data to be displayed
import {QUERY_Profiles} from '../utils/queries'