import React from 'react';
/* import formatDuration from '../../../helpers/formatDuration'; */
import { useDispatch } from 'react-redux';
/* import { playTrack } from '../../../redux/actions'; */
import { Container } from './styles';
/* import { ImPlay2 } from 'react-icons/im'; */

function Album({ album, favoriteFunction, favoriteBtnText, localStorageFunction }) {
  const dispatch = useDispatch();
  /* console.log(album); */

  function toggleFavorite(selectedAlbum) {
    localStorageFunction(selectedAlbum);
    dispatch(favoriteFunction(selectedAlbum));
  }

  return (
    <Container>
      <img src={ album.cover } alt={`Capa do album: ${ album.title }`} />
      <div>
        <span>{ album.title }</span>
        <span>{ album.artist.name }</span>
        {/* <span>Duração: { formatDuration(track.duration) }</span> */}
      </div>
      {/* <button type="button" onClick={ () => dispatch(playTrack(track)) }><ImPlay2 size={30}/></button> */}
      <button type="button" onClick={ () => toggleFavorite(album) }>{ favoriteBtnText }</button>
      <button type="button" onClick={ () => window.open(album.link, "_blank") }>Ver no Deezer</button>
    </Container>
  );
}

export default Album;