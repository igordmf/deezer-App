import React from 'react'
import Track from '../../atoms/Track';

import {Container} from './styles';

function TrackList(props) {
  const { tracks, favoriteFunction, favoriteBtnText } = props;
  console.log(tracks);

  return (
    <Container>
      {tracks.map((track) => (
        <Track
          track={track} 
          favoriteFunction={favoriteFunction}  
          favoriteBtnText={favoriteBtnText}
          key={track.id}
        />
      ))}
    </Container>
  )
}

export default TrackList;
