import React from 'react';
import { useSelector } from 'react-redux';
import { ACTIONS } from '../../redux/actions';
import AlbumsList from '../../components/molecules/AlbumsList';
import { favoriteBtnText } from '../../helpers/favoriteBtnText';
import { localStorageFunctions } from '../../helpers/localStorageFunctions';
import { Container } from './styles';

function Albums() {
  const favoritesAlbums = useSelector((state) => state.favoritesReducer.favoritesAlbums);

  return (
    <Container>
      <AlbumsList
        albums={ favoritesAlbums }
        favoriteFunction={ ACTIONS.removeFromFavoritesAlbums }
        favoriteBtnText={ favoriteBtnText.REMOVE_FROM_FAVORITES }
        localStorageFunction={ localStorageFunctions.removeAlbumFromLocalStorage }
      />
    </Container>
  )
}

export default Albums;
