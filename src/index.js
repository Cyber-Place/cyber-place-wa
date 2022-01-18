import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { Provider } from 'react-redux';

import store from './store';

const client = new ApolloClient({
  uri: 'http://localhost:3500/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ApolloProvider>
  ,
  document.getElementById('root')
);
