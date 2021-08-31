import React from 'react';
import { useSelector } from 'react-redux';
import { removeFromFavoritesArtists } from '../../redux/actions';
import ArtistsList from '../../components/molecules/ArtistsList';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import { removeArtistFromLocalStorage } from '../../helpers/localStorageFunctions/removeFromLocalStorage';
import { Container } from './styles';

function Artists() {
  const favoritesArtists = useSelector((state) => state.favoritesReducer.favoritesArtists);
  console.log(favoritesArtists);
  
  return (
    <Container>
      <ArtistsList
        artists={ favoritesArtists }
        favoriteFunction={ removeFromFavoritesArtists }
        favoriteBtnText={ favoriteBtnText[1] }
        localStorageFunction={ removeArtistFromLocalStorage }
      />
    </Container>
  )
}

export default Artists;
