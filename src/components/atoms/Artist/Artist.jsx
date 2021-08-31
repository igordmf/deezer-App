import React from 'react';
/* import formatDuration from '../../../helpers/formatDuration'; */
import { useDispatch } from 'react-redux';
/* import { playTrack } from '../../../redux/actions'; */
import { Container } from './styles';
/* import { ImPlay2 } from 'react-icons/im'; */

function Artist({ artist, favoriteFunction, favoriteBtnText, localStorageFunction }) {
  const dispatch = useDispatch();
  /* console.log(artist); */

  function toggleFavorite(selectedArtist) {
    localStorageFunction(selectedArtist);
    dispatch(favoriteFunction(selectedArtist));
  }

  return (
    <Container>
      <img src={ artist.picture } alt={`Capa do album: ${ artist.name }`} />
      <div>
        <span>{ artist.name }</span>
        {/* <span>{ album.artist.name }</span> */}
        {/* <span>Duração: { formatDuration(track.duration) }</span> */}
      </div>
      {/* <button type="button" onClick={ () => dispatch(playTrack(track)) }><ImPlay2 size={30}/></button> */}
      <button type="button" onClick={ () => toggleFavorite(artist) }>{ favoriteBtnText }</button>
      <button type="button" onClick={ () => window.open(artist.link, "_blank") }>Ver no Deezer</button>
    </Container>
  );
}

export default Artist;