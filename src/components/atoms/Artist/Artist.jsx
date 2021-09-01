import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toPlaylistArtist, artistToPlaylist } from '../../../redux/actions';
import { Container } from './styles';

function Artist({ artist, favoriteFunction, favoriteBtnText, localStorageFunction }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const artistOnPlaylist = useSelector((state) => state.musicsReducer);

  function toggleFavorite(selectedArtist) {
    localStorageFunction(selectedArtist);
    dispatch(favoriteFunction(selectedArtist));
  }

  function goToPlaylist(artist) {
    if(artistOnPlaylist.id !== artist.id) {
      dispatch(artistToPlaylist([]));
      dispatch(toPlaylistArtist(artist));
    }
    history.push('/playlist');
  }

  return (
    <Container>
      <img src={ artist.picture } alt={`Capa do album: ${ artist.name }`} />
      <div>
        <span>{ artist.name }</span>
      </div>
      {pathname !== '/playlist' && <button type="button" onClick={ () => goToPlaylist(artist) }>Ver playlist</button>}
      <button type="button" onClick={ () => toggleFavorite(artist) }>{ favoriteBtnText }</button>
      <button type="button" onClick={ () => window.open(artist.link, "_blank") }>Ver no Deezer</button>
    </Container>
  );
}

export default Artist;