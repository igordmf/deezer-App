import React from 'react';
import { useSelector } from 'react-redux';
import { removeFromFavorite } from '../../redux/actions';
import TrackList from '../../components/molecules/TrackList';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import removeFromLocalStorage from '../../helpers/localStorageFunctions/removeFromLocalStorage';
import { Container } from './styles';

function Musics() {
  const favorites = useSelector((state) => state.favoritesReducer.favorites);

  return (
    <Container>
      <TrackList
        tracks={ favorites }
        favoriteFunction={ removeFromFavorite }
        favoriteBtnText={ favoriteBtnText[1] }
        localStorageFunction={ removeFromLocalStorage }
      />
    </Container>
  )
}

export default Musics;
