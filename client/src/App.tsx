import React from 'react';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider} from '@apollo/client';
import {
  HashRouter as Router,
  Switch, 
  Route } from 'react-router-dom';
import { Header } from './Components/index';
import { GlobalStyle } from './Styles/global';
import { Movies } from './Pages/index';

const client = new ApolloClient({
  uri: 'https://pensive-kowalevski-eedfe0.netlify.app/',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
        <GlobalStyle />
        <Router>
          <Header /> 
          <Movies />
        </Router>
    </ApolloProvider>
  );
}

export default App;
