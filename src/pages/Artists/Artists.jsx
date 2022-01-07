import React from 'react';
import { useSelector } from 'react-redux';
import { ACTIONS } from '../../redux/actions';
import ArtistsList from '../../components/molecules/ArtistsList';
import { favoriteBtnText } from '../../helpers/favoriteBtnText';
import { localStorageFunctions } from '../../helpers/localStorageFunctions';
import { Container } from './styles';

function Artists() {
  const favoritesArtists = useSelector((state) => state.favoritesReducer.favoritesArtists);
  
  return (
    <Container>
      <ArtistsList
        artists={ favoritesArtists }
        favoriteFunction={ ACTIONS.removeFromFavoritesArtists }
        favoriteBtnText={ favoriteBtnText.REMOVE_FROM_FAVORITES }
        localStorageFunction={ localStorageFunctions.removeArtistFromLocalStorage }
      />
    </Container>
  )
}

export default Artists;
