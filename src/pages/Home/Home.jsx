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

function Home() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.musicsReducer.albums);
  const artists = useSelector((state) => state.musicsReducer.artists);
  const tracks = useSelector((state) => state.musicsReducer.tracks);
  const dataToDisplay = useSelector((state) => state.musicsReducer.dataToDisplay);
  const filtredAlbums = useSelector((state) => state.musicsReducer.filtredAlbums);
  const filtredArtists = useSelector((state) => state.musicsReducer.filtredArtists);
  const filtredTracks = useSelector((state) => state.musicsReducer.filtredTracks);

  useEffect(() => {
    dispatch(getBestMusics());
  }, [dispatch])

  return (
    <Container>
      <SearchBar />
      {dataToDisplay === 'tracks' && <TracksList
        tracks={ tracks.length === filtredTracks.length ? tracks : filtredTracks }
        favoriteFunction={ addToFavoritesMusics }
        favoriteBtnText={ favoriteBtnText[0] }
        localStorageFunction={ addMusicsToLocalStorage }
      />}
      {dataToDisplay === 'albums' && <AlbumsList 
        albums={ albums.length === filtredAlbums ? albums : filtredAlbums }
        favoriteFunction={ addToFavoritesAlbums }
        favoriteBtnText={ favoriteBtnText[0] }
        localStorageFunction={ addAlbumsToLocalStorage }
      />}
      {dataToDisplay === 'artists' && <ArtistsList
        artists={ artists.length === filtredArtists ? artists : filtredArtists }
        favoriteFunction={ addToFavoritesArtists }
        favoriteBtnText={ favoriteBtnText[0] }
        localStorageFunction={ addArtistsToLocalStorage }
      />}
    </Container>
  )
}

export default Home;
