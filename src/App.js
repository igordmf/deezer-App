import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from './routes';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import { localStorageFavorites } from './redux/actions';
import GlobalStyle from './styles/global';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    if(favorites) {
      dispatch(localStorageFavorites(favorites));
    }
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
