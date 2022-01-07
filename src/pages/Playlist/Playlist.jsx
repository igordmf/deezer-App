import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/actions';
import AlbumsList from '../../components/molecules/AlbumsList';
import ArtistsList from '../../components/molecules/ArtistsList';
import Track from '../../components/atoms/Track';
import CardLoader from '../../components/atoms/CardLoader';
import { favoriteBtnText } from '../../helpers/favoriteBtnText';
import { localStorageFunctions } from '../../helpers/localStorageFunctions';
import { Container } from './styles';

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
      dispatch(ACTIONS.getAlbumPlaylist(albumOnPlaylist));
    }
  }, [dispatch, albumOnPlaylist])

  useEffect(() => {
    if(artistOnPlaylist) {
      dispatch(ACTIONS.getArtistPlaylist(artistOnPlaylist));
    }
  }, [dispatch, artistOnPlaylist])

  useEffect(() => {
    if(!albumOnPlaylist && !artistOnPlaylist) {
      dispatch(ACTIONS.loadingToFalse());
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
          favoriteFunction={ ACTIONS.removeFromFavoritesAlbums }  
          favoriteBtnText={ favoriteBtnText.REMOVE_FROM_FAVORITES }
          localStorageFunction= { localStorageFunctions.removeAlbumFromLocalStorage }
        />
        :
        <AlbumsList
          albums={ [albumOnPlaylist] } 
          favoriteFunction={ ACTIONS.addToFavoritesAlbums }  
          favoriteBtnText={ favoriteBtnText.REMOVE_FROM_FAVORITES }
          localStorageFunction= { localStorageFunctions.addAlbumsToLocalStorage }
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
          favoriteFunction={ ACTIONS.removeFromFavoritesArtists }
          favoriteBtnText={ favoriteBtnText.REMOVE_FROM_FAVORITES }
          localStorageFunction= { localStorageFunctions.removeArtistFromLocalStorage }
        />
        :
        <ArtistsList
          artists={ [artistOnPlaylist] }
          favoriteFunction={ ACTIONS.addToFavoritesArtists }
          favoriteBtnText={ favoriteBtnText.ADD_TO_FAVORITES }
          localStorageFunction= { localStorageFunctions.addArtistsToLocalStorage }
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
              favoriteFunction={ ACTIONS.removeFromFavoritesMusics }  
              favoriteBtnText={ favoriteBtnText.REMOVE_FROM_FAVORITES }
              localStorageFunction= { localStorageFunctions.removeMusicFromLocalStorage }
              key={ track.id }
            />
            :
            <Track
              track={ track } 
              favoriteFunction={ ACTIONS.addToFavoritesMusics }  
              favoriteBtnText={ favoriteBtnText.ADD_TO_FAVORITES }
              localStorageFunction= { localStorageFunctions.addMusicsToLocalStorage }
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
        {[...Array(8).keys()].map((key) => (<div key={ key }><CardLoader /></div>))}
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
