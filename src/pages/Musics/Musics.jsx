import React from 'react';
import { useSelector } from 'react-redux';
import { ACTIONS } from '../../redux/actions';
import TracksList from '../../components/molecules/TracksList';
import { favoriteBtnText } from '../../helpers/favoriteBtnText';
import { localStorageFunctions } from '../../helpers/localStorageFunctions';
import { Container } from './styles';

function Musics() {
  const favoritesMusics = useSelector((state) => state.favoritesReducer.favoritesMusics);

  return (
    <Container>
      <TracksList
        tracks={ favoritesMusics }
        favoriteFunction={ ACTIONS.removeFromFavoritesMusics }
        favoriteBtnText={ favoriteBtnText.REMOVE_FROM_FAVORITES }
        localStorageFunction={ localStorageFunctions.removeMusicFromLocalStorage }
      />
    </Container>
  )
}

export default Musics;
