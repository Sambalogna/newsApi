import './App.css';

//Apollo Client is a library that allows us to handle data using the GraphQL frontend, 
//install @apollo/client and import the component and classes we need for setup:
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//basic imports for display
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

//instance of the imported ApolloClient class to 
//implement the core cleint-sid API and provide the uri of our GraphQL API so we can send requests
//instance of InMemoryCache to enable caching
//uri specified the URL of our GraphQL server
//cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

//ApolloClient intance can be accessed anywhere from the component tree by wrapping our React app 
//Basic webapp setup with header, home, and footer
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
