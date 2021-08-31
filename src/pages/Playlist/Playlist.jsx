import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaylist, addToFavoritesAlbums, removeFromFavoritesAlbums, addToFavoritesMusics, removeFromFavoritesMusics } from '../../redux/actions';
import Album from '../../components/atoms/Album';
import AlbumsList from '../../components/molecules/AlbumsList';
import Track from '../../components/atoms/Track';
import favoriteBtnText from '../../helpers/favoriteBtnText';
import { removeAlbumFromLocalStorage, removeMusicFromLocalStorage } from '../../helpers/localStorageFunctions/removeFromLocalStorage';
import addMusicsToLocalStorage from '../../helpers/localStorageFunctions/addMusicsToLocalStorage';
import addAlbumsToLocalStorage from '../../helpers/localStorageFunctions/addAlbumsToLocalStorage';
import { Container } from './styles';

function Playlist() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { albumOnPlaylist, playlist } = useSelector((state) => state.musicsReducer);
  const { favoritesAlbums, favoritesMusics} = useSelector((state) => state.favoritesReducer);
  console.log('album em playlist: ', albumOnPlaylist);
  console.log('tracks em playlist: ', playlist);

  useEffect(() => {
    if(albumOnPlaylist) {
      dispatch(getPlaylist(albumOnPlaylist));
    }
  }, [dispatch, albumOnPlaylist])

  useEffect(() => {
    setLoading(false);
  }, [playlist])

  /* console.log(loading); */

  return (
    <Container>
      {albumOnPlaylist && (favoritesAlbums.find((favAlbum) => favAlbum.id === albumOnPlaylist.id)
        ?
        <AlbumsList
          albums={ [albumOnPlaylist] } 
          favoriteFunction={ removeFromFavoritesAlbums }  
          favoriteBtnText={ favoriteBtnText[1] }
          localStorageFunction= { removeAlbumFromLocalStorage }
          key={ albumOnPlaylist.id }
        />
        :
        <AlbumsList
          albums={ [albumOnPlaylist] } 
          favoriteFunction={ addToFavoritesAlbums }  
          favoriteBtnText={ favoriteBtnText[0] }
          localStorageFunction= { addAlbumsToLocalStorage }
          key={ albumOnPlaylist.id }
        />)
      }
      {!!playlist.length && (playlist.map((track) => (
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
      ))}
    </Container>
  )
}

export default Playlist;
