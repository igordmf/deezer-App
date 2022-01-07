import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from './routes';
import Header from './components/molecules/Header';
import Footer from './components/molecules/Footer';
import { ACTIONS } from './redux/actions';
import GlobalStyle from './styles/global';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const favoritesMusics = JSON.parse(localStorage.getItem('favoritesMusics'));
    const favoritesAlbums = JSON.parse(localStorage.getItem('favoritesAlbums'));
    const favoritesArtists = JSON.parse(localStorage.getItem('favoritesArtists'));
    if (favoritesMusics) {
      dispatch(ACTIONS.localStorageFavorites([favoritesMusics, 'musics']));
    }
    if (favoritesAlbums) {
      dispatch(ACTIONS.localStorageFavorites([favoritesAlbums, 'albums']));
    }
    if (favoritesArtists) {
      dispatch(ACTIONS.localStorageFavorites([favoritesArtists , 'artists']));
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
