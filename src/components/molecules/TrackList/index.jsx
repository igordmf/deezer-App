import React from 'react'
import Track from '../../atoms/Track';

import { Container, Content } from './styles';

function TrackList(props) {
  const { tracks, favoriteFunction, favoriteBtnText } = props;
  console.log(tracks);

  return (
    <Container>
      <Content>
        {tracks.map((track) => (
          <Track
            track={ track } 
            favoriteFunction={ favoriteFunction }  
            favoriteBtnText={ favoriteBtnText }
            key={ track.id }
          />
        ))}
      </Content>
    </Container>
  )
}

export default TrackList;
