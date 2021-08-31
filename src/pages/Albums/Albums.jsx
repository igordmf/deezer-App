import React from 'react';
import { useSelector } from 'react-redux';
import { removeFromFavoritesAlbums } from '../../redux/actions';
import AlbumsList from '../../components/molecules/AlbumsList';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import { removeAlbumFromLocalStorage } from '../../helpers/localStorageFunctions/removeFromLocalStorage';
import { Container } from './styles';

function Albums() {
  const favoritesAlbums = useSelector((state) => state.favoritesReducer.favoritesAlbums);
  /* console.log(favoritesAlbums); */

  return (
    <Container>
      <AlbumsList
        albums={ favoritesAlbums }
        favoriteFunction={ removeFromFavoritesAlbums }
        favoriteBtnText={ favoriteBtnText[1] }
        localStorageFunction={ removeAlbumFromLocalStorage }
      />
    </Container>
  )
}

export default Albums;
