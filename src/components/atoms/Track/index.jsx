import React from 'react';
import formatDuration from '../../../helpers/formatDuration';

import { Container } from './styles';

function Track({ track, favoriteFunction, favoriteBtnText }) {

  return (
    <Container>
      <img src={ track.album.cover } alt={`Capa do album: ${ track.album.title }`} />
      <span>{ track.title }</span>
      <span>{ track.artist.name }</span>
      <span>Duração: { formatDuration(track.duration) }</span>
      <button type="button" onClick={ () => window.open(track.link, "_blank") }>Abrir música em nova aba</button>
      <div>
        <button type="button">Play</button>
      </div>
      <button type="button" onClick={ () => favoriteFunction(track) }>{ favoriteBtnText }</button>
    </Container>
  );
}

export default Track;