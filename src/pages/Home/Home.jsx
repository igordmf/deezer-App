import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBestMusics, addToFavoritesMusics, addToFavoritesAlbums, addToFavoritesArtists } from '../../redux/actions';
import TracksList from '../../components/molecules/TracksList/TracksList';
import AlbumsList from '../../components/molecules/AlbumsList';
import ArtistsList from '../../components/molecules/ArtistsList/ArtistsList';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import addMusicsToLocalStorage from '../../helpers/localStorageFunctions/addMusicsToLocalStorage';
import addAlbumsToLocalStorage from '../../helpers/localStorageFunctions/addAlbumsToLocalStorage';
import addArtistsToLocalStorage from '../../helpers/localStorageFunctions/addArtistsToLocalStorage';
import { Container } from './styles';
import SearchBar from '../../components/molecules/SearchBar/SearchBar';
import CardLoader from '../../components/atoms/CardLoader/CardLoader';

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
    dispatch(getBestMusics());
  }, [dispatch])

  function colletionToRender(dataToDisplay) {
    switch(dataToDisplay) {
      case 'albums':
        return (<AlbumsList 
          albums={ albums.length === filtredAlbums ? albums : filtredAlbums }
          favoriteFunction={ addToFavoritesAlbums }
          favoriteBtnText={ favoriteBtnText[0] }
          localStorageFunction={ addAlbumsToLocalStorage }
        />);
      case 'artists':
        return (<ArtistsList
          artists={ artists.length === filtredArtists ? artists : filtredArtists }
          favoriteFunction={ addToFavoritesArtists }
          favoriteBtnText={ favoriteBtnText[0] }
          localStorageFunction={ addArtistsToLocalStorage }
        />);
      case 'tracks':
        return (<TracksList
          tracks={ tracks.length === filtredTracks.length ? tracks : filtredTracks }
          favoriteFunction={ addToFavoritesMusics }
          favoriteBtnText={ favoriteBtnText[0] }
          localStorageFunction={ addMusicsToLocalStorage }
        />);
      default:
        return (<TracksList
          tracks={ tracks.length === filtredTracks.length ? tracks : filtredTracks }
          favoriteFunction={ addToFavoritesMusics }
          favoriteBtnText={ favoriteBtnText[0] }
          localStorageFunction={ addMusicsToLocalStorage }
        />
      );
    }
  }

  function loarderRender() {
    return (
      <div className="loaderContainer">
        {[...Array(8).keys()].map((key) => (<div><CardLoader /></div>))}
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
