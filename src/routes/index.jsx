import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Musics from '../pages/Musics';
import Albums from '../pages/Albums';
import Artists from '../pages/Artists';
import Playlist from '../pages/Playlist';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/playlist" component={ Playlist } />
      <Route exact path="/musicas" component={ Musics } />
      <Route exact path="/albuns" component={ Albums } />
      <Route exact path="/artistas" component={ Artists } />
    </Switch>
  )
}

export default Routes;
