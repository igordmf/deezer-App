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
    const favoritesMusics = JSON.parse(localStorage.getItem('favorites'));
    const favoritesAlbums = JSON.parse(localStorage.getItem('favoritesAlbums'));
    const favoritesArtists = JSON.parse(localStorage.getItem('favoritesArtists'));
    if (favoritesMusics) {
      dispatch(localStorageFavorites([favoritesMusics, 'musics']));
    }
    if (favoritesAlbums) {
      dispatch(localStorageFavorites([favoritesAlbums, 'albums']));
    }
    if (favoritesArtists) {
      dispatch(localStorageFavorites([favoritesArtists , 'artists']));
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
