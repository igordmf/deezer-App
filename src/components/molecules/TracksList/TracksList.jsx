import React from 'react';
import Track from '../../atoms/Track';

import { Container, Content } from './styles';

function TracksList(props) {
  const { tracks, favoriteFunction, favoriteBtnText, localStorageFunction } = props;

  return (
    <Container>
      <Content>
        {tracks.map((track) => (
          <Track
            track={ track } 
            favoriteFunction={ favoriteFunction }  
            favoriteBtnText={ favoriteBtnText }
            localStorageFunction= { localStorageFunction }
            key={ track.id }
          />
        ))}
      </Content>
    </Container>
  )
}

export default TracksList;
