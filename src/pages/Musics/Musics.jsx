import React from 'react';
import { useSelector } from 'react-redux';
import { removeFromFavoritesMusics } from '../../redux/actions';
import TracksList from '../../components/molecules/TracksList';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import { removeMusicFromLocalStorage } from '../../helpers/localStorageFunctions/removeFromLocalStorage';
import { Container } from './styles';

function Musics() {
  const favoritesMusics = useSelector((state) => state.favoritesReducer.favoritesMusics);

  return (
    <Container>
      <TracksList
        tracks={ favoritesMusics }
        favoriteFunction={ removeFromFavoritesMusics }
        favoriteBtnText={ favoriteBtnText[1] }
        localStorageFunction={ removeMusicFromLocalStorage }
      />
    </Container>
  )
}

export default Musics;
