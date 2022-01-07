import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/actions';
import TracksList from '../../components/molecules/TracksList';
import AlbumsList from '../../components/molecules/AlbumsList';
import ArtistsList from '../../components/molecules/ArtistsList';
import SearchBar from '../../components/molecules/SearchBar';
import CardLoader from '../../components/atoms/CardLoader';
import { favoriteBtnText } from '../../helpers/favoriteBtnText';
import { localStorageFunctions } from '../../helpers/localStorageFunctions';
import { Container } from './styles';

function Home() {
  const dispatch = useDispatch();
  const {
    albums,
    artists,
    tracks,
    dataToDisplay,
    filtredAlbums,
    filtredArtists,
    filtredTracks,
    loading
  } = useSelector((state) => state.musicsReducer);
  
  useEffect(() => {
    dispatch(ACTIONS.getBestMusics());
  }, [dispatch])

  function colletionToRender(dataToDisplay) {
    switch(dataToDisplay) {
      case 'albums':
        return (<AlbumsList 
          albums={ albums.length === filtredAlbums ? albums : filtredAlbums }
          favoriteFunction={ ACTIONS.addToFavoritesAlbums }
          favoriteBtnText={ favoriteBtnText.ADD_TO_FAVORITES }
          localStorageFunction={ localStorageFunctions.addAlbumsToLocalStorage }
        />);
      case 'artists':
        return (<ArtistsList
          artists={ artists.length === filtredArtists ? artists : filtredArtists }
          favoriteFunction={ ACTIONS.addToFavoritesArtists }
          favoriteBtnText={ favoriteBtnText.ADD_TO_FAVORITES }
          localStorageFunction={ localStorageFunctions.addArtistsToLocalStorage }
        />);
      case 'tracks':
        return (<TracksList
          tracks={ tracks.length === filtredTracks.length ? tracks : filtredTracks }
          favoriteFunction={ ACTIONS.addToFavoritesMusics }
          favoriteBtnText={ favoriteBtnText.ADD_TO_FAVORITES }
          localStorageFunction={ localStorageFunctions.addMusicsToLocalStorage }
        />);
      default:
        return (<TracksList
          tracks={ tracks.length === filtredTracks.length ? tracks : filtredTracks }
          favoriteFunction={ ACTIONS.addToFavoritesMusics }
          favoriteBtnText={ favoriteBtnText.ADD_TO_FAVORITES }
          localStorageFunction={ localStorageFunctions.addMusicsToLocalStorage }
        />
      );
    }
  }

  function loarderRender() {
    return (
      <div className="loaderContainer">
        {[...Array(8).keys()].map((key) => (<div key={ key }><CardLoader /></div>))}
      </div>
    )
  }
  
  return (
    <Container>
      <SearchBar />
      {loading
      ?
        (loarderRender())
        :
        (colletionToRender(dataToDisplay))
      }
    </Container>
  )
}

export default Home;
