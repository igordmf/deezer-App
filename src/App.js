import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import Routes from './routes';
import Header from './components/molecules/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Header />
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
