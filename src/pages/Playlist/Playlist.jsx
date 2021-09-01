import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAlbumPlaylist, getArtistPlaylist,
  addToFavoritesAlbums, removeFromFavoritesAlbums,
  addToFavoritesArtists, removeFromFavoritesArtists,
  addToFavoritesMusics, removeFromFavoritesMusics,
  loadingToFalse } from '../../redux/actions';
import AlbumsList from '../../components/molecules/AlbumsList';
import ArtistsList from '../../components/molecules/ArtistsList';
import Track from '../../components/atoms/Track';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import { removeAlbumFromLocalStorage,removeArtistFromLocalStorage,
  removeMusicFromLocalStorage } from '../../helpers/localStorageFunctions/removeFromLocalStorage';
import addMusicsToLocalStorage from '../../helpers/localStorageFunctions/addMusicsToLocalStorage';
import addAlbumsToLocalStorage from '../../helpers/localStorageFunctions/addAlbumsToLocalStorage';
import addArtistsToLocalStorage from '../../helpers/localStorageFunctions/addArtistsToLocalStorage';
import { Container } from './styles';
import CardLoader from '../../components/atoms/CardLoader/CardLoader';

function Playlist() {
  const dispatch = useDispatch();
  const {
    albumOnPlaylist,
    artistOnPlaylist,
    loading,
    playlist,
  } = useSelector((state) => state.musicsReducer);
  const {
    favoritesAlbums,
    favoritesArtists,
    favoritesMusics
  } = useSelector((state) => state.favoritesReducer);

  useEffect(() => {
    if(albumOnPlaylist) {
      dispatch(getAlbumPlaylist(albumOnPlaylist));
    }
  }, [dispatch, albumOnPlaylist])

  useEffect(() => {
    if(artistOnPlaylist) {
      dispatch(getArtistPlaylist(artistOnPlaylist));
    }
  }, [dispatch, artistOnPlaylist])

  useEffect(() => {
    if(!albumOnPlaylist && !artistOnPlaylist) {
      dispatch(loadingToFalse());
    }
  }, [dispatch, albumOnPlaylist, artistOnPlaylist])

  /* console.log(loading); */

  function renderAlbum() {
    if(albumOnPlaylist) {
      return (
        favoritesAlbums.find((favAlbum) => favAlbum.id === albumOnPlaylist.id)
        ?
        <AlbumsList
          albums={ [albumOnPlaylist] } 
          favoriteFunction={ removeFromFavoritesAlbums }  
          favoriteBtnText={ favoriteBtnText[1] }
          localStorageFunction= { removeAlbumFromLocalStorage }
        />
        :
        <AlbumsList
          albums={ [albumOnPlaylist] } 
          favoriteFunction={ addToFavoritesAlbums }  
          favoriteBtnText={ favoriteBtnText[0] }
          localStorageFunction= { addAlbumsToLocalStorage }
        />
      )
    }
  }

  function renderArtist() {
    if(artistOnPlaylist) {
      return (
        favoritesArtists.find((favArtist) => favArtist.id === artistOnPlaylist.id)
        ?
        <ArtistsList
          artists={ [artistOnPlaylist] }
          favoriteFunction={ removeFromFavoritesArtists }
          favoriteBtnText={ favoriteBtnText[1] }
          localStorageFunction= { removeArtistFromLocalStorage }
        />
        :
        <ArtistsList
          artists={ [artistOnPlaylist] }
          favoriteFunction={ addToFavoritesArtists }
          favoriteBtnText={ favoriteBtnText[0] }
          localStorageFunction= { addArtistsToLocalStorage }
        />
      )
    }
  }

  function renderPlaylist() {
    if(!!playlist.length) {
      return (
        <div>
          {playlist.map((track) => (
            (favoritesMusics.find((musics) => musics.id === track.id))
            ?
            <Track
              track={ track } 
              favoriteFunction={ removeFromFavoritesMusics }  
              favoriteBtnText={ favoriteBtnText[1] }
              localStorageFunction= { removeMusicFromLocalStorage }
              key={ track.id }
            />
            :
            <Track
              track={ track } 
              favoriteFunction={ addToFavoritesMusics }  
              favoriteBtnText={ favoriteBtnText[0] }
              localStorageFunction= { addMusicsToLocalStorage }
              key={ track.id }
            />)
          )}
        </div>
      )
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
      {renderAlbum()}
      {renderArtist()}
      {loading ? loarderRender() : renderPlaylist()}
    </Container>
  )
}

export default Playlist;
