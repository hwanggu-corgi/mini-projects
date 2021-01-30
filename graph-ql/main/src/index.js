import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// 2
const httpLink = createHttpLink({
  uri: 'http://localhost:4000' // Link to server
});

// 3
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// 4
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();