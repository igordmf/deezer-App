import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { ACTIONS } from '../../../redux/actions';
import { Container } from './styles';

function Album({ album, favoriteFunction, favoriteBtnText, localStorageFunction }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const albumOnPlaylist = useSelector((state) => state.musicsReducer);

  function toggleFavorite(selectedAlbum) {
    localStorageFunction(selectedAlbum);
    dispatch(favoriteFunction(selectedAlbum));
  }

  function goToPlaylist(album) {
    if(albumOnPlaylist.id !== album.id) {
      dispatch(ACTIONS.albumToPlaylist([]));
      dispatch(ACTIONS.toPlaylistAlbum(album));
    }
    history.push('/playlist');
  }

  return (
    <Container>
      <img src={ album.cover } alt={`Capa do album: ${ album.title }`} />
      <div>
        <span>{ album.title }</span>
        <span>{ album.artist.name }</span>
        <span>Faixas: { album.nb_tracks }</span>
      </div>
      {pathname !== '/playlist' && <button type="button" onClick={ () => goToPlaylist(album) }>Ver playlist</button>}
      <button type="button" onClick={ () => toggleFavorite(album) }>{ favoriteBtnText }</button>
      <button type="button" onClick={ () => window.open(album.link, "_blank") }>Ver no Deezer</button>
    </Container>
  );
}

export default Album;
