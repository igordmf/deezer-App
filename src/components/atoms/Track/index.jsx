import React from 'react';
import formatDuration from '../../../helpers/formatDuration';
import { useDispatch } from 'react-redux';
import { playTrack } from '../../../redux/actions';
import { Container } from './styles';
import { ImPlay2 } from 'react-icons/im';

function Track({ track, favoriteFunction, favoriteBtnText }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={ track.album.cover } alt={`Capa do album: ${ track.album.title }`} />
      <div>
        <span>{ track.title }</span>
        <span>{ track.artist.name }</span>
        <span>Duração: { formatDuration(track.duration) }</span>
      </div>
      <button type="button" onClick={ () => dispatch(playTrack(track)) }><ImPlay2 size={30}/></button>
      <button type="button" onClick={ () => dispatch(favoriteFunction(track)) }>{ favoriteBtnText }</button>
      <button type="button" onClick={ () => window.open(track.link, "_blank") }>Ver no Deezer</button>
    </Container>
  );
}

export default Track;