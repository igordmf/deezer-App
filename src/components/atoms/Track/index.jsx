import React from 'react';
import formatDuration from '../../../helpers/formatDuration';
import { useDispatch } from 'react-redux';
import { playTrack } from '../../../redux/actions';
import { Container } from './styles';

function Track({ track, favoriteFunction, favoriteBtnText }) {
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={ track.album.cover } alt={`Capa do album: ${ track.album.title }`} />
      <span>{ track.title }</span>
      <span>{ track.artist.name }</span>
      <span>Duração: { formatDuration(track.duration) }</span>
      <button type="button" onClick={ () => window.open(track.link, "_blank") }>Ver no Deezer</button>
      <div>
        <button type="button" onClick={ () => dispatch(playTrack(track)) }>Play</button>
      </div>
      <button type="button" onClick={ () => dispatch(favoriteFunction(track)) }>{ favoriteBtnText }</button>
    </Container>
  );
}

export default Track;